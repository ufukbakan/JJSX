export namespace JJSX {
  export interface ElementProps {
    children: Element<any> | Element<any>[];
  }

  export interface Element<T extends ElementProps> {
    type: string | ((arg: T) => Element<T>) | Element<T> | RenderableClass;
    props: T;
    children: Element<any>[];
  }

  export interface RenderableClass {
    render(): Renderable<any>;
  }

  export type RenderableClassConstructor<T extends ElementProps> = new (props: T) => RenderableClass;

  export type Renderable<T extends ElementProps> = string | Element<T> | RenderableClass | Renderable<any>[];

  type JsxAttributes<T, P extends ElementProps = ElementProps> = Partial<T> | { children?: Renderable<P> };

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
  }
}
