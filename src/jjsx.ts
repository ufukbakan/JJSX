export namespace JJSX {
  export interface ElementProps {
    children: Element<any>[];
  }

  export interface Element<T extends ElementProps> {
    type: string | ((arg: T) => Element<T>) | Element<T>;
    props: T;
  }

  export interface RenderableClass {
    render(): Renderable<any>;
  }

  export type Renderable<T extends ElementProps> = string | Element<T> | RenderableClass | (string | Element<T> | RenderableClass)[];

  export interface IntrinsicElements {
    a: Record<string, string> & Partial<HTMLAnchorElement>;
    abbr: Record<string, string> & Partial<HTMLElement>;
    address: Record<string, string> & Partial<HTMLElement>;
    area: Record<string, string> & Partial<HTMLAreaElement>;
    article: Record<string, string> & Partial<HTMLElement>;
    aside: Record<string, string> & Partial<HTMLElement>;
    audio: Record<string, string> & Partial<HTMLAudioElement>;
    b: Record<string, string> & Partial<HTMLElement>;
    base: Record<string, string> & Partial<HTMLBaseElement>;
    bdi: Record<string, string> & Partial<HTMLElement>;
    bdo: Record<string, string> & Partial<HTMLElement>;
    big: Record<string, string> & Partial<HTMLElement>;
    blockquote: Record<string, string> & Partial<HTMLQuoteElement>;
    body: Record<string, string> & Partial<HTMLBodyElement>;
    br: Record<string, string> & Partial<HTMLBRElement>;
    button: Record<string, string> & Partial<HTMLButtonElement>;
    canvas: Record<string, string> & Partial<HTMLCanvasElement>;
    caption: Record<string, string> & Partial<HTMLTableCaptionElement>;
    center: Record<string, string> & Partial<HTMLElement>;
    cite: Record<string, string> & Partial<HTMLElement>;
    code: Record<string, string> & Partial<HTMLElement>;
    col: Record<string, string> & Partial<HTMLTableColElement>;
    colgroup: Record<string, string> & Partial<HTMLTableColElement>;
    data: Record<string, string> & Partial<HTMLDataElement>;
    datalist: Record<string, string> & Partial<HTMLDataListElement>;
    dd: Record<string, string> & Partial<HTMLElement>;
    del: Record<string, string> & Partial<HTMLModElement>;
    details: Record<string, string> & Partial<HTMLDetailsElement>;
    dfn: Record<string, string> & Partial<HTMLElement>;
    dialog: Record<string, string> & Partial<HTMLDialogElement>;
    div: Record<string, string> & Partial<HTMLDivElement>;
    dl: Record<string, string> & Partial<HTMLDListElement>;
    dt: Record<string, string> & Partial<HTMLElement>;
    em: Record<string, string> & Partial<HTMLElement>;
    embed: Record<string, string> & Partial<HTMLEmbedElement>;
    fieldset: Record<string, string> & Partial<HTMLFieldSetElement>;
    figcaption: Record<string, string> & Partial<HTMLElement>;
    figure: Record<string, string> & Partial<HTMLElement>;
    footer: Record<string, string> & Partial<HTMLElement>;
    form: Record<string, string> & Partial<HTMLFormElement>;
    h1: Record<string, string> & Partial<HTMLHeadingElement>;
    h2: Record<string, string> & Partial<HTMLHeadingElement>;
    h3: Record<string, string> & Partial<HTMLHeadingElement>;
    h4: Record<string, string> & Partial<HTMLHeadingElement>;
    h5: Record<string, string> & Partial<HTMLHeadingElement>;
    h6: Record<string, string> & Partial<HTMLHeadingElement>;
    head: Record<string, string> & Partial<HTMLHeadElement>;
    header: Record<string, string> & Partial<HTMLElement>;
    hgroup: Record<string, string> & Partial<HTMLElement>;
    hr: Record<string, string> & Partial<HTMLHRElement>;
    html: Record<string, string> & Partial<HTMLHtmlElement>;
    i: Record<string, string> & Partial<HTMLElement>;
    iframe: Record<string, string> & Partial<HTMLIFrameElement>;
    img: Record<string, string> & Partial<HTMLImageElement>;
    input: Record<string, string> & Partial<HTMLInputElement>;
    ins: Record<string, string> & Partial<HTMLModElement>;
    kbd: Record<string, string> & Partial<HTMLElement>;
    keygen: Record<string, string> & Partial<HTMLElement>;
    label: Record<string, string> & Partial<HTMLLabelElement>;
    legend: Record<string, string> & Partial<HTMLLegendElement>;
    li: Record<string, string> & Partial<HTMLLIElement>;
    link: Record<string, string> & Partial<HTMLLinkElement>;
    main: Record<string, string> & Partial<HTMLElement>;
    map: Record<string, string> & Partial<HTMLMapElement>;
    mark: Record<string, string> & Partial<HTMLElement>;
    menu: Record<string, string> & Partial<HTMLMenuElement>;
    menuitem: Record<string, string> & Partial<HTMLElement>;
    meta: Record<string, string> & Partial<HTMLMetaElement>;
    meter: Record<string, string> & Partial<HTMLMeterElement>;
    nav: Record<string, string> & Partial<HTMLElement>;
    noscript: Record<string, string> & Partial<HTMLElement>;
    object: Record<string, string> & Partial<HTMLObjectElement>;
    ol: Record<string, string> & Partial<HTMLOListElement>;
    optgroup: Record<string, string> & Partial<HTMLOptGroupElement>;
    option: Record<string, string> & Partial<HTMLOptionElement>;
    output: Record<string, string> & Partial<HTMLOutputElement>;
    p: Record<string, string> & Partial<HTMLParagraphElement>;
    param: Record<string, string> & Partial<HTMLParamElement>;
    picture: Record<string, string> & Partial<HTMLElement>;
    pre: Record<string, string> & Partial<HTMLPreElement>;
    progress: Record<string, string> & Partial<HTMLProgressElement>;
    q: Record<string, string> & Partial<HTMLQuoteElement>;
    rp: Record<string, string> & Partial<HTMLElement>;
    rt: Record<string, string> & Partial<HTMLElement>;
    ruby: Record<string, string> & Partial<HTMLElement>;
    s: Record<string, string> & Partial<HTMLElement>;
    samp: Record<string, string> & Partial<HTMLElement>;
    search: Record<string, string> & Partial<HTMLElement>;
    slot: Record<string, string> & Partial<HTMLSlotElement>;
    script: Record<string, string> & Partial<HTMLScriptElement>;
    section: Record<string, string> & Partial<HTMLElement>;
    select: Record<string, string> & Partial<HTMLSelectElement>;
    small: Record<string, string> & Partial<HTMLElement>;
    source: Record<string, string> & Partial<HTMLSourceElement>;
    span: Record<string, string> & Partial<HTMLSpanElement>;
    strong: Record<string, string> & Partial<HTMLElement>;
    style: Record<string, string> & Partial<HTMLStyleElement>;
    sub: Record<string, string> & Partial<HTMLElement>;
    summary: Record<string, string> & Partial<HTMLElement>;
    sup: Record<string, string> & Partial<HTMLElement>;
    table: Record<string, string> & Partial<HTMLTableElement>;
    template: Record<string, string> & Partial<HTMLTemplateElement>;
    tbody: Record<string, string> & Partial<HTMLTableSectionElement>;
    td: Record<string, string> & Partial<HTMLTableCellElement>;
    textarea: Record<string, string> & Partial<HTMLTextAreaElement>;
    tfoot: Record<string, string> & Partial<HTMLTableSectionElement>;
    th: Record<string, string> & Partial<HTMLTableCellElement>;
    thead: Record<string, string> & Partial<HTMLTableSectionElement>;
    time: Record<string, string> & Partial<HTMLTimeElement>;
    title: Record<string, string> & Partial<HTMLTitleElement>;
    tr: Record<string, string> & Partial<HTMLTableRowElement>;
    track: Record<string, string> & Partial<HTMLTrackElement>;
    u: Record<string, string> & Partial<HTMLElement>;
    ul: Record<string, string> & Partial<HTMLUListElement>;
    var: Record<string, string> & Partial<HTMLElement>;
    video: Record<string, string> & Partial<HTMLVideoElement>;
    wbr: Record<string, string> & Partial<HTMLElement>;
    webview: Record<string, string> & Partial<HTMLElement>;
  }
}
