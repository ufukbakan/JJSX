import { transpile, init } from "../src";

init();

describe(("Boolean Attribute Test"), () => {

    test("input with checked attribute", () => {
        const element = <input type="checkbox" checked />;
        const htmlString = transpile(element);
        expect(htmlString).toEqual(`<input type="checkbox" checked>`);
    })

    test("input with checked false attribute", () => {
        const element = <input type="checkbox" checked={false} />;
        const htmlString = transpile(element);
        expect(htmlString).toEqual(`<input type="checkbox">`);
    })
})
