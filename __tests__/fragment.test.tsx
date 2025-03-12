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