import { init, transpile } from "../src";

init();

interface Props extends Record<string, any> {
    children?: JSX.Renderable;
}

function Component({ children, ...props }: Props) {
    return <div {...props}>{children}</div>
}

describe("Function Component Test", () => {

    test("With JSX Call", () => {
        const htmlString = transpile(<Component val="xyz">hello world</Component>);
        expect(htmlString).toEqual('<div val="xyz">hello world</div>')
    })

    test("With Function Call", () => {
        const htmlString = transpile(Component({ val: "xyz", children: "hello world" }));
        expect(htmlString).toEqual('<div val="xyz">hello world</div>')
    })
});