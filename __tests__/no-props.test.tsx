import { init, transpile } from "../src";

init();

test("No props Test", () => {
    const element = <>
        <div></div>
        <hr />
        <div></div>
        <br />
        <input></input>
        <area></area>
        <wbr></wbr>
    </>;
    const htmlString = transpile(element);
    expect(htmlString).toEqual(`<div></div><hr><div></div><br><input><area><wbr>`)
});