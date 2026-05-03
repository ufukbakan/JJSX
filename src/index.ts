import { JJSX } from "./jjsx";

const asyncProto = Object.getPrototypeOf(async () => { });

const jjsxModule = {
  init,
  jsxFactory,
  fragmentFactory,
  transpile,
};

export type MaybePromise<T> = T | Promise<T>;

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
    // Only merge children if children prop is not explicitly provided
    if (!('children' in props)) {
      props = { ...props, children } as T;
    }
  }
  if(Object.getPrototypeOf(type) === asyncProto) {
    return Promise.resolve({ type, props, children });
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

function buildTag({ type, props, children }: { type: string; props: any; children: string }): string {
  let attrs = "";
  for (const [k, v] of Object.entries(props)) {
    if (k === "children" || v === false || v == null || k.startsWith("__")) continue;

    const [key, value] = handleAttribute([k, v]);
    // Boolean attributes (e.g., disabled)
    attrs += value === true ? ` ${key}` : ` ${key}="${value}"`;
  }
  if (VOID_TAGS.has(type)) return `<${type}${attrs}>`;
  return `<${type}${attrs}>${children}</${type}>`;
}

export function transpile(jsx: JSX.Element & Promise<any>): Promise<string>;
export function transpile(jsx: JSX.Element): string;
export function transpile(jsx: JSX.Element): MaybePromise<string> {
  // Check if we need to handle async at the top level
  if (jsx instanceof Promise) {
    return jsx.then(transpile);
  }

  if (typeof jsx === "string" || typeof jsx === "number") return esc(String(jsx));
  if (typeof jsx === "boolean" || !jsx) return "";

  if (Array.isArray(jsx)) {
    const results = jsx.map((e) => transpile(e));
    const hasPromises = results.some((r) => r && typeof r === 'object' && 'then' in r);
    if (hasPromises) {
      return Promise.all(results).then(r => r.join(""));
    }
    return results.join("");
  }

  if (typeof jsx === "object" && jsx !== null) {
    if ("render" in jsx) {
      const result = jsx.render();
      if (result instanceof Promise) {
        return result.then(e => transpile(e));
      }
      return transpile(result);
    }

    const { type, props = {}, children: jsxChildren = [] } = jsx;
    if (!type) return "";

    if (isClassConstructor<JJSX.RenderableClassConstructor<any>>(type)) {
      return transpile(new type(props));
    }

    if (typeof type === "function") {
      const result = type({ ...props });
      if (result instanceof Promise) {
        return result.then(e => transpile(e));
      }
      return transpile(result);
    }
    const childResults = jsxChildren.map(e => transpile(e));
    const hasChildPromises = childResults.some(r => typeof r === 'object' && 'then' in r);
    if (hasChildPromises) {
      return Promise.all(childResults).then(r => r.join("")).then(children => buildTag({ type, props, children }));
    }
    const children = childResults.join("");
    return buildTag({ type, props, children });
  }
  return "";
}