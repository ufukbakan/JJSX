import { JJSX } from "./jjsx";

const jjsxModule = {
  init,
  jsxFactory,
  fragmentFactory,
  transpile,
};

const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const ATTR_REPLACEMENT_MAP: Record<string, string> = { className: "class", htmlFor: "for" };
const ESCAPE_MAP: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
const ESCAPE_REGEX = /[&<>"']/g;
const esc = (v: any) => typeof v === "string"
  ? v.replace(ESCAPE_REGEX, s => ESCAPE_MAP[s])
  : v;

declare global {
  namespace JSX {
    type IntrinsicElements = JJSX.IntrinsicElements;
    type Element = JJSX.Element;
    type Component<T extends JJSX.ComponentProps> = JJSX.Component<T>
    type FunctionComponent<T> = (props: T) => JSX.Element;
    type ComponentProps = JJSX.ComponentProps;
    interface ElementChildrenAttribute {
      children: unknown;
    }
  }
  var JJSX: typeof jjsxModule;
}

export function init() {
  globalThis.JJSX = jjsxModule;
}

export function jsxFactory<T extends JSX.ComponentProps>(type: () => JSX.Element, props: T, ...children: any[]): JSX.Element {
  if (!props) {
    props = { children } as T;
  } else {
    // Merge children into props if props already exists
    props = { ...props, children } as T;
  }
  return {
    type,
    props,
    children,
  };
}

export function fragmentFactory(args: { children: JSX.Element[] }): JSX.Element[] {
  return args.children;
}

function isClassConstructor<T>(o: any): o is T {
  return o && o.toString && o.toString().startsWith("class") && o.prototype?.constructor === o;
}

function handleAttribute(pair: [string, any]): [string, any] {
  const [key, value] = pair;
  if (ATTR_REPLACEMENT_MAP[key]) {
    return handleAttribute([ATTR_REPLACEMENT_MAP[key], value]);
  }
  return [key, esc(value)];
}

export function transpile(jsx: JSX.Element): string {
  if (typeof jsx === "string" || typeof jsx === "number") return esc(String(jsx));
  if (typeof jsx === "boolean" || !jsx) return "";
  if (Array.isArray(jsx)) return jsx.map(transpile).join("");
  if (typeof jsx === "object") {
    if ("render" in jsx) return transpile(jsx.render());
    const { type, props = {}, children: jsxChildren = [] } = jsx;
    if (!type) return "";
    if (isClassConstructor<JJSX.RenderableClassConstructor<any>>(type)) {
      return transpile(new type(props));
    }
    if (typeof type === "function") {
      return transpile(type({ ...props, children: jsxChildren }));
    }
    const children = jsxChildren.map(transpile).join("");
    let attrs = "";
    for (const [k,v] of Object.entries(props)) {
      if (k === "children" || v === false || v == null || k.startsWith("__")) continue;
      
      const [key, value] = handleAttribute([k,v]);
      // Boolean attributes (e.g., disabled)
      attrs += value === true ? ` ${key}` : ` ${key}="${value}"`;
    }
    if (VOID_TAGS.has(type)) return `<${type}${attrs}>`;
    return `<${type}${attrs}>${children}</${type}>`;
  }
  return "";
}
