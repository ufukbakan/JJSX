import { transpile, init } from "../src";

init();

interface Props {
    children?: JSX.Element;
    name: string;
}

function SyncComponent({ name, children }: Props) {
    return <><div>should render {name}</div>{children}</>;
}

async function AsyncComponent({ name, children }: Props) {
    return <><div>should render {name}</div>{children}</>;
}

class AsyncComponentClass {
    name: string;
    children: JSX.Element;

    constructor({ name, children }: Props) {
        this.name = name;
        this.children = children;
    }
    async render() {
        return <><div>should render {this.name}</div>{this.children}</>;
    }
}

describe("async component", () => {

    test("async component with sync children", async () => {
        const htmlString = await transpile(Promise.resolve(<AsyncComponent name="test" children={<SyncComponent name="child" children={undefined} />} />));
        expect(htmlString).toEqual(`<div>should render test</div><div>should render child</div>`);
    })

    test("async component with function call", async () => {
        const htmlString = await transpile(AsyncComponent({ name: "test", children: <SyncComponent name="child" children={undefined} /> }));
        expect(htmlString).toEqual(`<div>should render test</div><div>should render child</div>`);
    })

    test("async component class", async () => {
        const htmlString = await transpile(Promise.resolve(new AsyncComponentClass({ name: "test", children: <div>child</div> })));
        expect(htmlString).toEqual(`<div>should render test</div><div>child</div>`);
    })

    test("mixed components in parent", async () => {
        const htmlString = await transpile(Promise.resolve(
            <div id="parent">
                <AsyncComponent name="async" />
                <SyncComponent name="sync" />
            </div>
        ));
        expect(htmlString).toEqual(`<div id="parent"><div>should render async</div><div>should render sync</div></div>`);
    })

    test("mixed components with depth", async () => {
        const htmlString = await transpile(Promise.resolve(
            <div id="parent">
                <AsyncComponent name="async">
                    <SyncComponent name="child" />
                </AsyncComponent>
                <AsyncComponent name="async-2" children={<SyncComponent name="sync" />} />
            </div>
        ));
        expect(htmlString).toEqual(`<div id="parent"><div>should render async</div><div>should render child</div><div>should render async-2</div><div>should render sync</div></div>`);
    })

    test('async components array', async () => {
        const htmlString = await transpile(Promise.resolve(
            [
                <AsyncComponent name="async1" />,
                <SyncComponent name="sync1" />,
                <AsyncComponent name="async2" />,
                <SyncComponent name="sync2" />
            ]
        ));
        expect(htmlString).toEqual(`<div>should render async1</div><div>should render sync1</div><div>should render async2</div><div>should render sync2</div>`);
    })
})