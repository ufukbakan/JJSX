import { MaybePromise } from ".";

export namespace JJSX {
  export interface ComponentProps {
    children?: Element;
  }

  export interface Component<T extends ComponentProps> {
    type: string | ((arg: T) => Element);
    props: T;
    children: Element[];
  }

  export interface RenderableClass {
    render(): Element;
  }

  export type RenderableClassConstructor<T extends ComponentProps> = new (props: T) => RenderableClass;

  type RenderablePrimitives = string | number | boolean | null | undefined;

  export type Element = MaybePromise<RenderablePrimitives | Component<any> | RenderableClass | Element[]>;

  type JsxAttributes<T> = Record<string, string> | Partial<T> | { children?: Element };

  export interface IntrinsicElements {
    a: JsxAttributes<HTMLAnchorElement>;
    abbr: JsxAttributes<HTMLElement>;
    address: JsxAttributes<HTMLElement>;
    area: JsxAttributes<HTMLAreaElement>;
    article: JsxAttributes<HTMLElement>;
    aside: JsxAttributes<HTMLElement>;
    audio: JsxAttributes<HTMLAudioElement>;
    b: JsxAttributes<HTMLElement>;
    base: JsxAttributes<HTMLBaseElement>;
    bdi: JsxAttributes<HTMLElement>;
    bdo: JsxAttributes<HTMLElement>;
    big: JsxAttributes<HTMLElement>;
    blockquote: JsxAttributes<HTMLQuoteElement>;
    body: JsxAttributes<HTMLBodyElement>;
    br: JsxAttributes<HTMLBRElement>;
    button: JsxAttributes<HTMLButtonElement>;
    canvas: JsxAttributes<HTMLCanvasElement>;
    caption: JsxAttributes<HTMLTableCaptionElement>;
    center: JsxAttributes<HTMLElement>;
    cite: JsxAttributes<HTMLElement>;
    code: JsxAttributes<HTMLElement>;
    col: JsxAttributes<HTMLTableColElement>;
    colgroup: JsxAttributes<HTMLTableColElement>;
    data: JsxAttributes<HTMLDataElement>;
    datalist: JsxAttributes<HTMLDataListElement>;
    dd: JsxAttributes<HTMLElement>;
    del: JsxAttributes<HTMLModElement>;
    details: JsxAttributes<HTMLDetailsElement>;
    dfn: JsxAttributes<HTMLElement>;
    dialog: JsxAttributes<HTMLDialogElement>;
    div: JsxAttributes<HTMLDivElement>;
    dl: JsxAttributes<HTMLDListElement>;
    dt: JsxAttributes<HTMLElement>;
    em: JsxAttributes<HTMLElement>;
    embed: JsxAttributes<HTMLEmbedElement>;
    fieldset: JsxAttributes<HTMLFieldSetElement>;
    figcaption: JsxAttributes<HTMLElement>;
    figure: JsxAttributes<HTMLElement>;
    footer: JsxAttributes<HTMLElement>;
    form: JsxAttributes<HTMLFormElement>;
    h1: JsxAttributes<HTMLHeadingElement>;
    h2: JsxAttributes<HTMLHeadingElement>;
    h3: JsxAttributes<HTMLHeadingElement>;
    h4: JsxAttributes<HTMLHeadingElement>;
    h5: JsxAttributes<HTMLHeadingElement>;
    h6: JsxAttributes<HTMLHeadingElement>;
    head: JsxAttributes<HTMLHeadElement>;
    header: JsxAttributes<HTMLElement>;
    hgroup: JsxAttributes<HTMLElement>;
    hr: JsxAttributes<HTMLHRElement>;
    html: JsxAttributes<HTMLHtmlElement>;
    i: JsxAttributes<HTMLElement>;
    iframe: JsxAttributes<HTMLIFrameElement>;
    img: JsxAttributes<HTMLImageElement>;
    input: JsxAttributes<HTMLInputElement>;
    ins: JsxAttributes<HTMLModElement>;
    kbd: JsxAttributes<HTMLElement>;
    keygen: JsxAttributes<HTMLElement>;
    label: JsxAttributes<HTMLLabelElement>;
    legend: JsxAttributes<HTMLLegendElement>;
    li: JsxAttributes<HTMLLIElement>;
    link: JsxAttributes<HTMLLinkElement>;
    main: JsxAttributes<HTMLElement>;
    map: JsxAttributes<HTMLMapElement>;
    mark: JsxAttributes<HTMLElement>;
    menu: JsxAttributes<HTMLMenuElement>;
    menuitem: JsxAttributes<HTMLElement>;
    meta: JsxAttributes<HTMLMetaElement>;
    meter: JsxAttributes<HTMLMeterElement>;
    nav: JsxAttributes<HTMLElement>;
    noscript: JsxAttributes<HTMLElement>;
    object: JsxAttributes<HTMLObjectElement>;
    ol: JsxAttributes<HTMLOListElement>;
    optgroup: JsxAttributes<HTMLOptGroupElement>;
    option: JsxAttributes<HTMLOptionElement>;
    output: JsxAttributes<HTMLOutputElement>;
    p: JsxAttributes<HTMLParagraphElement>;
    param: JsxAttributes<HTMLParamElement>;
    picture: JsxAttributes<HTMLElement>;
    pre: JsxAttributes<HTMLPreElement>;
    progress: JsxAttributes<HTMLProgressElement>;
    q: JsxAttributes<HTMLQuoteElement>;
    rp: JsxAttributes<HTMLElement>;
    rt: JsxAttributes<HTMLElement>;
    ruby: JsxAttributes<HTMLElement>;
    s: JsxAttributes<HTMLElement>;
    samp: JsxAttributes<HTMLElement>;
    search: JsxAttributes<HTMLElement>;
    slot: JsxAttributes<HTMLSlotElement>;
    script: JsxAttributes<HTMLScriptElement>;
    section: JsxAttributes<HTMLElement>;
    select: JsxAttributes<HTMLSelectElement>;
    small: JsxAttributes<HTMLElement>;
    source: JsxAttributes<HTMLSourceElement>;
    span: JsxAttributes<HTMLSpanElement>;
    strong: JsxAttributes<HTMLElement>;
    style: JsxAttributes<HTMLStyleElement>;
    sub: JsxAttributes<HTMLElement>;
    summary: JsxAttributes<HTMLElement>;
    sup: JsxAttributes<HTMLElement>;
    table: JsxAttributes<HTMLTableElement>;
    template: JsxAttributes<HTMLTemplateElement>;
    tbody: JsxAttributes<HTMLTableSectionElement>;
    td: JsxAttributes<HTMLTableCellElement>;
    textarea: JsxAttributes<HTMLTextAreaElement>;
    tfoot: JsxAttributes<HTMLTableSectionElement>;
    th: JsxAttributes<HTMLTableCellElement>;
    thead: JsxAttributes<HTMLTableSectionElement>;
    time: JsxAttributes<HTMLTimeElement>;
    title: JsxAttributes<HTMLTitleElement>;
    tr: JsxAttributes<HTMLTableRowElement>;
    track: JsxAttributes<HTMLTrackElement>;
    u: JsxAttributes<HTMLElement>;
    ul: JsxAttributes<HTMLUListElement>;
    var: JsxAttributes<HTMLElement>;
    video: JsxAttributes<HTMLVideoElement>;
    wbr: JsxAttributes<HTMLElement>;
    webview: JsxAttributes<HTMLElement>;
    // SVG elements
    svg: JsxAttributes<SVGSVGElement>;
    animate: JsxAttributes<SVGAnimateElement>;
    animateMotion: JsxAttributes<SVGAnimateMotionElement>;
    circle: JsxAttributes<SVGCircleElement>;
    ellipse: JsxAttributes<SVGEllipseElement>;
    line: JsxAttributes<SVGLineElement>;
    path: JsxAttributes<SVGPathElement>;
    polygon: JsxAttributes<SVGPolygonElement>;
    polyline: JsxAttributes<SVGPolylineElement>;
    rect: JsxAttributes<SVGRectElement>;
    g: JsxAttributes<SVGGElement>;
    image: JsxAttributes<SVGImageElement>;
    text: JsxAttributes<SVGTextElement>;
    tspan: JsxAttributes<SVGTSpanElement>;
    defs: JsxAttributes<SVGDefsElement>;
    linearGradient: JsxAttributes<SVGLinearGradientElement>;
    radialGradient: JsxAttributes<SVGRadialGradientElement>;
    stop: JsxAttributes<SVGStopElement>;
    set: JsxAttributes<SVGSetElement>;
    switch: JsxAttributes<SVGSwitchElement>;
    use: JsxAttributes<SVGUseElement>;
    view: JsxAttributes<SVGViewElement>;
    symbol: JsxAttributes<SVGSymbolElement>;
    marker: JsxAttributes<SVGMarkerElement>;
    clipPath: JsxAttributes<SVGClipPathElement>;
    mask: JsxAttributes<SVGMaskElement>;
    pattern: JsxAttributes<SVGPatternElement>;
    filter: JsxAttributes<SVGFilterElement>;
    foreignObject: JsxAttributes<SVGForeignObjectElement>;
    feBlend: JsxAttributes<SVGFEBlendElement>;
    feColorMatrix: JsxAttributes<SVGFEColorMatrixElement>;
    feComponentTransfer: JsxAttributes<SVGFEComponentTransferElement>;
    feComposite: JsxAttributes<SVGFECompositeElement>;
    feConvolveMatrix: JsxAttributes<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: JsxAttributes<SVGFEDiffuseLightingElement>;
    feDisplacementMap: JsxAttributes<SVGFEDisplacementMapElement>;
    feDropShadow: JsxAttributes<SVGFEDropShadowElement>;
    feFlood: JsxAttributes<SVGFEFloodElement>;
    feGaussianBlur: JsxAttributes<SVGFEGaussianBlurElement>;
    feImage: JsxAttributes<SVGFEImageElement>;
    feMerge: JsxAttributes<SVGFEMergeElement>;
    feMergeNode: JsxAttributes<SVGFEMergeNodeElement>;
    feMorphology: JsxAttributes<SVGFEMorphologyElement>;
    feOffset: JsxAttributes<SVGFEOffsetElement>;
    feSpecularLighting: JsxAttributes<SVGFESpecularLightingElement>;
    feTile: JsxAttributes<SVGFETileElement>;
    feTurbulence: JsxAttributes<SVGFETurbulenceElement>;
    // XML-like/MathML elements (generic, no specific DOM type)
    math: JsxAttributes<HTMLElement>;
    mrow: JsxAttributes<HTMLElement>;
    mi: JsxAttributes<HTMLElement>;
    mo: JsxAttributes<HTMLElement>;
    mn: JsxAttributes<HTMLElement>;
    msqrt: JsxAttributes<HTMLElement>;
    mfrac: JsxAttributes<HTMLElement>;
    mroot: JsxAttributes<HTMLElement>;
    mstyle: JsxAttributes<HTMLElement>;
    semantics: JsxAttributes<HTMLElement>;
    annotation: JsxAttributes<HTMLElement>;
    // XML sitemap elements
    xml: JsxAttributes<HTMLElement>;
    urlset: JsxAttributes<HTMLElement>;
    url: JsxAttributes<HTMLElement>;
    loc: JsxAttributes<HTMLElement>;
    lastmod: JsxAttributes<HTMLElement>;
    changefreq: JsxAttributes<HTMLElement>;
    priority: JsxAttributes<HTMLElement>;
  }
}
