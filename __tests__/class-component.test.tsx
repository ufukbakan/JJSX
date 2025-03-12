import { init, transpile } from "../src";

init();

class TestComponent {
    public props: Record<string, any>;
    constructor(props: typeof this.props) {
        this.props = props;
    }
    render() {
        return <h1 {...this.props}>Hello World</h1>
    }
}

describe(("Class Component Test"), () => {

    test("With JSX call", () => {
        const element = <TestComponent class="heading" />;
        const htmlString = transpile(element);
        expect(htmlString).toEqual(`<h1 class="heading">Hello World</h1>`)
    });

    test("With constructor call", () => {
        const element = new TestComponent({ class: "heading" });
        const htmlString = transpile(element);
        expect(htmlString).toEqual(`<h1 class="heading">Hello World</h1>`)
    });
})