import { init, transpile } from "../src";

init();

function ParentComponent() {
    return <ChildComponent />
}

function ChildComponent() {
    return [1,2,3].map(i => <div key={String(i)} ></div>)
}

describe("Function Component Test", () => {

    test("With JSX Call", () => {
        const htmlString = transpile(<ParentComponent />);
        expect(htmlString).toEqual('<div key="1"></div><div key="2"></div><div key="3"></div>')
    })

    test("With Function Call", () => {
        const htmlString = transpile(ParentComponent());
        expect(htmlString).toEqual('<div key="1"></div><div key="2"></div><div key="3"></div>')
    })
});