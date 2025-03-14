import { init, transpile } from "../src";

init();

function ParentComponent(props: Record<string, any>) {
    return <ChildComponent {...props} />
}

function ChildComponent(props: Record<string, any>) {
    return <div {...props}></div>
}

describe("Function Component Test", () => {

    test("With JSX Call", () => {
        const htmlString = transpile(<ParentComponent val="xyz" />);
        expect(htmlString).toEqual('<div val="xyz"></div>')
    })

    test("With Function Call", () => {
        const htmlString = transpile(ParentComponent({ val: "xyz" }));
        expect(htmlString).toEqual('<div val="xyz"></div>')
    })
});