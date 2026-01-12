import { transpile } from "../src";

describe("Renderable test", () => {

    test("render strings", () => {
        const html = transpile("<html></html>");
        expect(html).toEqual(html);
    })

    test("render numbers", () => {
        const html = transpile(123  as any);
        expect(html).toEqual("123");
        expect(transpile(0)).toEqual("0");
    })

    test("dont render booleans", () => {
        expect(transpile(true as any)).toEqual("");
        expect(transpile(false as any)).toEqual("");
    })

    test("dont render empty values", () => {
        expect(transpile(undefined as any)).toEqual("");
        expect(transpile(null as any)).toEqual("");
        expect(transpile([] as any)).toEqual("");
        expect(transpile({} as any)).toEqual("");
    })

    test("dont render unknown types", () => {
        class UnknownClass { };
        expect(transpile(UnknownClass as any)).toEqual("");
    });
});