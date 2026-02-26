import { init, transpile } from "../src";

init();

test("Omit underscore attributes", () => {
    const htmlString = transpile(<div __exclude="test" include="test" ></div>);
    expect(htmlString).toEqual(`<div include="test"></div>`)
});