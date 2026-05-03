import { JJSX } from "./jjsx";

const jjsxModule = {
  init,
  jsxFactory,
  fragmentFactory,
  transpile,
};

export type MaybePromise<T> = T | Promise<T>;

const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const ATTR_REPLACEMENT_MAP = { className: "class", htmlFor: "for" } as const;
const ESCAPE_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' } as const;
const ESCAPE_REGEX = /[&<>"']/g;
const esc = (v: any) => typeof v === "string"
  ? v.replace(ESCAPE_REGEX, s => ESCAPE_MAP[s as keyof typeof ESCAPE_MAP])
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
  } else if (!('children' in props)) {
    props = { ...props, children } as T;
  }
  if(type.constructor === (async () => {}).constructor) {
    return Promise.resolve({ type, props, children });
  }
  return { type, props, children };
}

export function fragmentFactory(args: { children: JSX.Element[] }): JSX.Element[] {
  return args.children;
}

const isClassConstructor = <T>(o: any): o is T => 
  o && o.toString && o.toString().startsWith("class") && o.prototype?.constructor === o;

const handleAttribute = (pair: [string, any]): [string, any] => {
  const [key, value] = pair;
  if (ATTR_REPLACEMENT_MAP[key as keyof typeof ATTR_REPLACEMENT_MAP]) {
    return handleAttribute([ATTR_REPLACEMENT_MAP[key as keyof typeof ATTR_REPLACEMENT_MAP], value]);
  }
  return [key, esc(value)];
};

const buildTag = ({ type, props, children }: { type: string; props: any; children: string }): string => {
  let attrs = "";
  for (const [k, v] of Object.entries(props)) {
    if (k === "children" || v === false || v == null || k.startsWith("__")) continue;
    const [key, value] = handleAttribute([k, v]);
    attrs += value === true ? ` ${key}` : ` ${key}="${value}"`;
  }
  return VOID_TAGS.has(type) ? `<${type}${attrs}>` : `<${type}${attrs}>${children}</${type}>`;
};

export function transpile(jsx: JSX.Element & Promise<any>): Promise<string>;
export function transpile(jsx: JSX.Element): string;
export function transpile(jsx: JSX.Element): MaybePromise<string> {
  if (jsx instanceof Promise) {
    return jsx.then(transpile);
  }
  if (typeof jsx === "string" || typeof jsx === "number") return esc(String(jsx));
  if (typeof jsx === "boolean" || !jsx) return "";
  if (Array.isArray(jsx)) {
    const results = jsx.map(transpile);
    const hasPromises = results.some(r => typeof r === 'object' && 'then' in r);
    return hasPromises ? Promise.all(results).then(r => r.join("")) : results.join("");
  }
  if (typeof jsx === "object" && jsx !== null) {
    if ("render" in jsx) {
      const result = jsx.render();
      return result instanceof Promise ? result.then(transpile) : transpile(result);
    }
    const { type, props = {}, children: jsxChildren = [] } = jsx;
    if (!type) return "";
    if (isClassConstructor<JJSX.RenderableClassConstructor<any>>(type)) {
      return transpile(new type(props));
    }
    if (typeof type === "function") {
      const result = type({ ...props });
      return result instanceof Promise ? result.then(transpile) : transpile(result);
    }
    const childResults = jsxChildren.map(transpile);
    const hasChildPromises = childResults.some(r => typeof r === 'object' && 'then' in r);
    return hasChildPromises 
      ? Promise.all(childResults).then(r => r.join("")).then(children => buildTag({ type, props, children }))
      : buildTag({ type, props, children: childResults.join("") });
  }
  return "";
}