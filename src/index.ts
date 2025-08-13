import { JJSX } from "./jjsx";

const jjsxModule = {
  init,
  jsxFactory,
  fragmentFactory,
  transpile,
};

declare global {
  namespace JSX {
    type IntrinsicElements = JJSX.IntrinsicElements;
    type Element<T extends ElementProps> = JJSX.Element<T>;
    type ElementProps = JJSX.ElementProps;
    type Renderable = JJSX.Renderable;
    interface ElementChildrenAttribute {
      children: unknown;
    }
  }
  var JJSX: typeof jjsxModule;
}

export function init() {
  globalThis.JJSX = jjsxModule;
}

export function jsxFactory<T extends JSX.ElementProps>(type: () => JSX.Element<T>, props: T, ...children: any[]): JSX.Element<T> {
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

export function fragmentFactory(args: { children: JSX.Element<JSX.ElementProps>[] }): JSX.Element<JSX.ElementProps>[] {
  return args.children;
}

function isClassConstructor<T>(o: any): o is T {
  return o && o.toString && o.toString().startsWith("class") && o.prototype?.constructor === o;
}

const voidTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

function handleSpecialAttribute(pair: [string, any]): [string, any] {
  const [key, value] = pair;
  if (key === "className") {
    return ["class", value];
  }
  if (key === "htmlFor") {
    return ["for", value];
  }
  return [key, value];
}

export function transpile(jsx: JSX.Renderable): string {
  if (!jsx) return "";
  if (typeof jsx === "boolean") return "";
  if (typeof jsx === "string") return jsx;
  if (typeof jsx === "number") return `${jsx}`;
  if (typeof jsx === "object" && "render" in jsx) return transpile(jsx.render());
  if (Array.isArray(jsx)) return jsx.map(transpile).join("");
  if (typeof jsx === "object") {
    const { type, props = {}, children: jsxChildren = [] } = jsx;
    if (!type) return "";
    if (isClassConstructor<JJSX.RenderableClassConstructor<any>>(type)) {
      return transpile(new type(props));
    }
    if (typeof type === "function") {
      const propsWithChildren = { ...props, children: jsxChildren };
      return transpile(type(propsWithChildren));
    }
    const children = jsxChildren.map(transpile).join("");
    const attrs = Object.entries(props)
      .filter(([key]) => key !== "children")
      .map(handleSpecialAttribute)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");
    if (voidTags.includes(type)) return `<${type}${attrs}>`;
    return `<${type}${attrs}>${children}</${type}>`;
  }
  return "";
}
