import { init, transpile } from "../src";

init();

function ParentComponent(props: Record<string, any>) {
    return <ChildComponent {...props} />
}

function ChildComponent(props: Record<string, any>) {
    return <div {...props}></div>
}

test("Function Component Test", () => {
    const htmlString = transpile(<ParentComponent val="xyz" />);
    expect(htmlString).toEqual('<div val="xyz"></div>')
});