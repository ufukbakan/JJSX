import { init, transpile } from "../src";

init();

describe("Escaping tests", () => {

    test("Ampersand escaping Test", () => {
        const htmlString = transpile(<input value="He said Hello & Goodbye" />);
        expect(htmlString).toEqual(`<input value="He said Hello &amp; Goodbye">`)
    });

    test("Quote escaping Test", () => {
        const htmlString = transpile(<input value='He said "Hello"' />);
        expect(htmlString).toEqual(`<input value="He said &quot;Hello&quot;">`)
    });

    test("Apostrophe escaping Test", () => {
        const htmlString = transpile(<input value="He said 'Hello'" />);
        expect(htmlString).toEqual(`<input value="He said &apos;Hello&apos;">`)
    });

    test("Less than escaping Test", () => {
        const htmlString = transpile(<input value='0 < 1' />);
        expect(htmlString).toEqual(`<input value="0 &lt; 1">`)
    });

    test("Greater than escaping Test", () => {
        const htmlString = transpile(<input value='1 > 0' />);
        expect(htmlString).toEqual(`<input value="1 &gt; 0">`)
    });
});