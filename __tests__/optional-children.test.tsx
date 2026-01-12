import { init, transpile } from "../src";

init();

interface LayoutProps {
    children?: JSX.Element
}

function Layout({ children }: LayoutProps) {
    return <body>{children}</body>
}

function EmptyPage() {
    return <Layout></Layout>
}

function ArrayChildren() {
    return ["1", "2"].map(i => <div id={i}></div>)
}

function FullPage() {
    return (
        <Layout>
            <h1>Title</h1>
            <ArrayChildren />
        </Layout>
    )
}

describe("Function Component Test", () => {

    test("Empty Page", () => {
        const htmlString = transpile(<EmptyPage />);
        expect(htmlString).toEqual('<body></body>')
    })

    test("Full Page", () => {
        const htmlString = transpile(<FullPage />);
        expect(htmlString).toEqual('<body><h1>Title</h1><div id="1"></div><div id="2"></div></body>')
    })
});