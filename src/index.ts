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
    type Renderable<T extends ElementProps> = JJSX.Renderable<T>;
  }
  var JJSX: typeof jjsxModule;
}

export function init() {
  globalThis.JJSX = jjsxModule;
}

export function jsxFactory(type: JSX.Element<JSX.ElementProps>, props: JSX.ElementProps, ...children: any[]): JSX.Element<JSX.ElementProps> {
  if (!props) {
    props = { children };
  }
  props.children = props.children || children || [];
  return {
    type,
    props,
  };
}

export function fragmentFactory(args: { children: JSX.Element<JSX.ElementProps>[] }): JSX.Element<JSX.ElementProps>[] {
  return args.children;
}

export function transpile(jsx: JSX.Renderable<any>): string {
  if (typeof jsx === "string") return jsx;
  if (typeof jsx === "number") return `${jsx}`;
  if ("render" in jsx) return transpile(jsx.render());
  if (Array.isArray(jsx)) return jsx.map(transpile).join("");
  if (typeof jsx === "object" && jsx !== null) {
    const { type, props } = jsx;
    if (typeof type === "function") {
      return transpile(type(props));
    }
    const children = props.children.map(transpile).join("");
    const attrs = Object.entries(props || {})
      .filter(([key]) => key !== "children")
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");
    return `<${type}${attrs}>${children}</${type}>`;
  }
  return "";
}
