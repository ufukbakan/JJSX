import { init, transpile } from "../src";

init();

test("Line break test", () => {
    const element = <>
        <p>paragraph 1</p>
        <br/>
        <p>paragraph 2</p>
        <br></br>
        <p>paragraph 3</p>
    </>;
    const htmlString = transpile(element);
    expect(htmlString).toEqual(`<p>paragraph 1</p><br/><p>paragraph 2</p><br/><p>paragraph 3</p>`)
});