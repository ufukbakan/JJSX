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

function handleAttribute(pair: [string, any]): [string, any] {
  const [key, value] = pair;
  if (key === "className") {
    return handleAttribute(["class", value]);
  }
  if (key === "htmlFor") {
    return handleAttribute(["for", value]);
  }
  const replaceMap = {
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '<': '&lt;',
    '>': '&gt;',
  };
  const replacedValue = Object.keys(replaceMap)
    .reduce((acc, key) => acc?.replace?.(new RegExp(key, 'g'), replaceMap[key as keyof typeof replaceMap]), value);
  return [key, replacedValue];
}

export function transpile(jsx: JSX.Element): string {
  if (typeof jsx === "boolean") return "";
  if (typeof jsx === "string") return jsx;
  if (typeof jsx === "number") return `${jsx}`;
  if (!jsx) return "";
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
      .map(handleAttribute)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");
    if (voidTags.includes(type)) return `<${type}${attrs}>`;
    return `<${type}${attrs}>${children}</${type}>`;
  }
  return "";
}
