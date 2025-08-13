export namespace JJSX {
  export interface ElementProps {
    children?: Renderable;
  }

  export interface Element<T extends ElementProps> {
    type: string | ((arg: T) => Renderable);
    props: T;
    children: Renderable[];
  }

  export interface RenderableClass {
    render(): Renderable;
  }

  export type RenderableClassConstructor<T extends ElementProps> = new (props: T) => RenderableClass;

  type RenderablePrimitives = string | number | boolean | null | undefined;

  export type Renderable = RenderablePrimitives | Element<any> | RenderableClass | Renderable[];

  type JsxAttributes<T> = Partial<T> | { children?: Renderable };

  export interface IntrinsicElements {
    a: Record<string, string> | JsxAttributes<HTMLAnchorElement>;
    abbr: Record<string, string> | JsxAttributes<HTMLElement>;
    address: Record<string, string> | JsxAttributes<HTMLElement>;
    area: Record<string, string> | JsxAttributes<HTMLAreaElement>;
    article: Record<string, string> | JsxAttributes<HTMLElement>;
    aside: Record<string, string> | JsxAttributes<HTMLElement>;
    audio: Record<string, string> | JsxAttributes<HTMLAudioElement>;
    b: Record<string, string> | JsxAttributes<HTMLElement>;
    base: Record<string, string> | JsxAttributes<HTMLBaseElement>;
    bdi: Record<string, string> | JsxAttributes<HTMLElement>;
    bdo: Record<string, string> | JsxAttributes<HTMLElement>;
    big: Record<string, string> | JsxAttributes<HTMLElement>;
    blockquote: Record<string, string> | JsxAttributes<HTMLQuoteElement>;
    body: Record<string, string> | JsxAttributes<HTMLBodyElement>;
    br: Record<string, string> | JsxAttributes<HTMLBRElement>;
    button: Record<string, string> | JsxAttributes<HTMLButtonElement>;
    canvas: Record<string, string> | JsxAttributes<HTMLCanvasElement>;
    caption: Record<string, string> | JsxAttributes<HTMLTableCaptionElement>;
    center: Record<string, string> | JsxAttributes<HTMLElement>;
    cite: Record<string, string> | JsxAttributes<HTMLElement>;
    code: Record<string, string> | JsxAttributes<HTMLElement>;
    col: Record<string, string> | JsxAttributes<HTMLTableColElement>;
    colgroup: Record<string, string> | JsxAttributes<HTMLTableColElement>;
    data: Record<string, string> | JsxAttributes<HTMLDataElement>;
    datalist: Record<string, string> | JsxAttributes<HTMLDataListElement>;
    dd: Record<string, string> | JsxAttributes<HTMLElement>;
    del: Record<string, string> | JsxAttributes<HTMLModElement>;
    details: Record<string, string> | JsxAttributes<HTMLDetailsElement>;
    dfn: Record<string, string> | JsxAttributes<HTMLElement>;
    dialog: Record<string, string> | JsxAttributes<HTMLDialogElement>;
    div: Record<string, string> | JsxAttributes<HTMLDivElement>;
    dl: Record<string, string> | JsxAttributes<HTMLDListElement>;
    dt: Record<string, string> | JsxAttributes<HTMLElement>;
    em: Record<string, string> | JsxAttributes<HTMLElement>;
    embed: Record<string, string> | JsxAttributes<HTMLEmbedElement>;
    fieldset: Record<string, string> | JsxAttributes<HTMLFieldSetElement>;
    figcaption: Record<string, string> | JsxAttributes<HTMLElement>;
    figure: Record<string, string> | JsxAttributes<HTMLElement>;
    footer: Record<string, string> | JsxAttributes<HTMLElement>;
    form: Record<string, string> | JsxAttributes<HTMLFormElement>;
    h1: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    h2: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    h3: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    h4: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    h5: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    h6: Record<string, string> | JsxAttributes<HTMLHeadingElement>;
    head: Record<string, string> | JsxAttributes<HTMLHeadElement>;
    header: Record<string, string> | JsxAttributes<HTMLElement>;
    hgroup: Record<string, string> | JsxAttributes<HTMLElement>;
    hr: Record<string, string> | JsxAttributes<HTMLHRElement>;
    html: Record<string, string> | JsxAttributes<HTMLHtmlElement>;
    i: Record<string, string> | JsxAttributes<HTMLElement>;
    iframe: Record<string, string> | JsxAttributes<HTMLIFrameElement>;
    img: Record<string, string> | JsxAttributes<HTMLImageElement>;
    input: Record<string, string> | JsxAttributes<HTMLInputElement>;
    ins: Record<string, string> | JsxAttributes<HTMLModElement>;
    kbd: Record<string, string> | JsxAttributes<HTMLElement>;
    keygen: Record<string, string> | JsxAttributes<HTMLElement>;
    label: Record<string, string> | JsxAttributes<HTMLLabelElement>;
    legend: Record<string, string> | JsxAttributes<HTMLLegendElement>;
    li: Record<string, string> | JsxAttributes<HTMLLIElement>;
    link: Record<string, string> | JsxAttributes<HTMLLinkElement>;
    main: Record<string, string> | JsxAttributes<HTMLElement>;
    map: Record<string, string> | JsxAttributes<HTMLMapElement>;
    mark: Record<string, string> | JsxAttributes<HTMLElement>;
    menu: Record<string, string> | JsxAttributes<HTMLMenuElement>;
    menuitem: Record<string, string> | JsxAttributes<HTMLElement>;
    meta: Record<string, string> | JsxAttributes<HTMLMetaElement>;
    meter: Record<string, string> | JsxAttributes<HTMLMeterElement>;
    nav: Record<string, string> | JsxAttributes<HTMLElement>;
    noscript: Record<string, string> | JsxAttributes<HTMLElement>;
    object: Record<string, string> | JsxAttributes<HTMLObjectElement>;
    ol: Record<string, string> | JsxAttributes<HTMLOListElement>;
    optgroup: Record<string, string> | JsxAttributes<HTMLOptGroupElement>;
    option: Record<string, string> | JsxAttributes<HTMLOptionElement>;
    output: Record<string, string> | JsxAttributes<HTMLOutputElement>;
    p: Record<string, string> | JsxAttributes<HTMLParagraphElement>;
    param: Record<string, string> | JsxAttributes<HTMLParamElement>;
    picture: Record<string, string> | JsxAttributes<HTMLElement>;
    pre: Record<string, string> | JsxAttributes<HTMLPreElement>;
    progress: Record<string, string> | JsxAttributes<HTMLProgressElement>;
    q: Record<string, string> | JsxAttributes<HTMLQuoteElement>;
    rp: Record<string, string> | JsxAttributes<HTMLElement>;
    rt: Record<string, string> | JsxAttributes<HTMLElement>;
    ruby: Record<string, string> | JsxAttributes<HTMLElement>;
    s: Record<string, string> | JsxAttributes<HTMLElement>;
    samp: Record<string, string> | JsxAttributes<HTMLElement>;
    search: Record<string, string> | JsxAttributes<HTMLElement>;
    slot: Record<string, string> | JsxAttributes<HTMLSlotElement>;
    script: Record<string, string> | JsxAttributes<HTMLScriptElement>;
    section: Record<string, string> | JsxAttributes<HTMLElement>;
    select: Record<string, string> | JsxAttributes<HTMLSelectElement>;
    small: Record<string, string> | JsxAttributes<HTMLElement>;
    source: Record<string, string> | JsxAttributes<HTMLSourceElement>;
    span: Record<string, string> | JsxAttributes<HTMLSpanElement>;
    strong: Record<string, string> | JsxAttributes<HTMLElement>;
    style: Record<string, string> | JsxAttributes<HTMLStyleElement>;
    sub: Record<string, string> | JsxAttributes<HTMLElement>;
    summary: Record<string, string> | JsxAttributes<HTMLElement>;
    sup: Record<string, string> | JsxAttributes<HTMLElement>;
    table: Record<string, string> | JsxAttributes<HTMLTableElement>;
    template: Record<string, string> | JsxAttributes<HTMLTemplateElement>;
    tbody: Record<string, string> | JsxAttributes<HTMLTableSectionElement>;
    td: Record<string, string> | JsxAttributes<HTMLTableCellElement>;
    textarea: Record<string, string> | JsxAttributes<HTMLTextAreaElement>;
    tfoot: Record<string, string> | JsxAttributes<HTMLTableSectionElement>;
    th: Record<string, string> | JsxAttributes<HTMLTableCellElement>;
    thead: Record<string, string> | JsxAttributes<HTMLTableSectionElement>;
    time: Record<string, string> | JsxAttributes<HTMLTimeElement>;
    title: Record<string, string> | JsxAttributes<HTMLTitleElement>;
    tr: Record<string, string> | JsxAttributes<HTMLTableRowElement>;
    track: Record<string, string> | JsxAttributes<HTMLTrackElement>;
    u: Record<string, string> | JsxAttributes<HTMLElement>;
    ul: Record<string, string> | JsxAttributes<HTMLUListElement>;
    var: Record<string, string> | JsxAttributes<HTMLElement>;
    video: Record<string, string> | JsxAttributes<HTMLVideoElement>;
    wbr: Record<string, string> | JsxAttributes<HTMLElement>;
    webview: Record<string, string> | JsxAttributes<HTMLElement>;
    // SVG elements
    svg: Record<string, string> | JsxAttributes<SVGSVGElement>;
    circle: Record<string, string> | JsxAttributes<SVGCircleElement>;
    ellipse: Record<string, string> | JsxAttributes<SVGEllipseElement>;
    line: Record<string, string> | JsxAttributes<SVGLineElement>;
    path: Record<string, string> | JsxAttributes<SVGPathElement>;
    polygon: Record<string, string> | JsxAttributes<SVGPolygonElement>;
    polyline: Record<string, string> | JsxAttributes<SVGPolylineElement>;
    rect: Record<string, string> | JsxAttributes<SVGRectElement>;
    g: Record<string, string> | JsxAttributes<SVGGElement>;
    text: Record<string, string> | JsxAttributes<SVGTextElement>;
    tspan: Record<string, string> | JsxAttributes<SVGTSpanElement>;
    defs: Record<string, string> | JsxAttributes<SVGDefsElement>;
    linearGradient: Record<string, string> | JsxAttributes<SVGLinearGradientElement>;
    radialGradient: Record<string, string> | JsxAttributes<SVGRadialGradientElement>;
    stop: Record<string, string> | JsxAttributes<SVGStopElement>;
    use: Record<string, string> | JsxAttributes<SVGUseElement>;
    symbol: Record<string, string> | JsxAttributes<SVGSymbolElement>;
    marker: Record<string, string> | JsxAttributes<SVGMarkerElement>;
    clipPath: Record<string, string> | JsxAttributes<SVGClipPathElement>;
    mask: Record<string, string> | JsxAttributes<SVGMaskElement>;
    pattern: Record<string, string> | JsxAttributes<SVGPatternElement>;
    filter: Record<string, string> | JsxAttributes<SVGFilterElement>;
    feBlend: Record<string, string> | JsxAttributes<SVGFEBlendElement>;
    feColorMatrix: Record<string, string> | JsxAttributes<SVGFEColorMatrixElement>;
    feComponentTransfer: Record<string, string> | JsxAttributes<SVGFEComponentTransferElement>;
    feComposite: Record<string, string> | JsxAttributes<SVGFECompositeElement>;
    feConvolveMatrix: Record<string, string> | JsxAttributes<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: Record<string, string> | JsxAttributes<SVGFEDiffuseLightingElement>;
    feDisplacementMap: Record<string, string> | JsxAttributes<SVGFEDisplacementMapElement>;
    feDropShadow: Record<string, string> | JsxAttributes<SVGFEDropShadowElement>;
    feFlood: Record<string, string> | JsxAttributes<SVGFEFloodElement>;
    feGaussianBlur: Record<string, string> | JsxAttributes<SVGFEGaussianBlurElement>;
    feImage: Record<string, string> | JsxAttributes<SVGFEImageElement>;
    feMerge: Record<string, string> | JsxAttributes<SVGFEMergeElement>;
    feMergeNode: Record<string, string> | JsxAttributes<SVGFEMergeNodeElement>;
    feMorphology: Record<string, string> | JsxAttributes<SVGFEMorphologyElement>;
    feOffset: Record<string, string> | JsxAttributes<SVGFEOffsetElement>;
    feSpecularLighting: Record<string, string> | JsxAttributes<SVGFESpecularLightingElement>;
    feTile: Record<string, string> | JsxAttributes<SVGFETileElement>;
    feTurbulence: Record<string, string> | JsxAttributes<SVGFETurbulenceElement>;
    // XML-like/MathML elements (generic, no specific DOM type)
    math: Record<string, string> | JsxAttributes<HTMLElement>;
    mrow: Record<string, string> | JsxAttributes<HTMLElement>;
    mi: Record<string, string> | JsxAttributes<HTMLElement>;
    mo: Record<string, string> | JsxAttributes<HTMLElement>;
    mn: Record<string, string> | JsxAttributes<HTMLElement>;
    msqrt: Record<string, string> | JsxAttributes<HTMLElement>;
    mfrac: Record<string, string> | JsxAttributes<HTMLElement>;
    mroot: Record<string, string> | JsxAttributes<HTMLElement>;
    mstyle: Record<string, string> | JsxAttributes<HTMLElement>;
    semantics: Record<string, string> | JsxAttributes<HTMLElement>;
    annotation: Record<string, string> | JsxAttributes<HTMLElement>;
  }
}
