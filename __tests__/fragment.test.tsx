import { init, transpile } from "../src";

init();

test("Fragment Test", () => {
    const element = <>
        <div id="div1"></div>
        <div id="div2"></div>
    </>;
    const htmlString = transpile(element);
    expect(htmlString).toEqual(`<div id="div1"></div><div id="div2"></div>`)
});

test("Fragment children test", () => {
    const Wrapper = ({ children }: { children: JSX.Renderable }) => {
        return (
            <div id="wrapper">
                {children}
            </div>
        )
    }
    const element = <Wrapper>
        <>
            <div id="div1"></div>
            <div id="div2"></div>
        </>
    </Wrapper>
    const htmlString = transpile(element);
    expect(htmlString).toEqual(`<div id="wrapper"><div id="div1"></div><div id="div2"></div></div>`)
});