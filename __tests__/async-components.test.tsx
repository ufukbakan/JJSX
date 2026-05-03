import { transpile, init, jsxFactory } from "../src";
import Async from "./components/async";
import Sync from "./components/sync";
import SyncLayout from "./components/layout";
import AsyncLayout from "./components/async-layout";
import a from "../src/a";

init();

class AsyncComponentClass {
    children: JSX.Element;

    constructor({ children }: JSX.ComponentProps) {
        this.children = children;
    }
    async render() {
        return <><div>async component class</div>{this.children}</>;
    }
}

describe("async render tests", () => {

    test("async", async () => {
        const htmlString = await transpile(Promise.resolve(<Async children={<Sync children={undefined} />} />));
        expect(htmlString).toEqual('<div>async</div><div>sync</div>');
    })

    test("async component with function call", async () => {
        const htmlString = await transpile(Async({ children: <Sync children={undefined} /> }));
        expect(htmlString).toEqual('<div>async</div><div>sync</div>');
    })

    test("async component class", async () => {
        const htmlString = await transpile(Promise.resolve(new AsyncComponentClass({ children: <div>child</div> })));
        expect(htmlString).toEqual('<div>async component class</div><div>child</div>');
    })

    test("mixed components in parent", async () => {
        const htmlString = await transpile(Promise.resolve(
            <div id="parent">
                <Async />
                <Sync />
            </div>
        ));
        expect(htmlString).toEqual('<div id="parent"><div>async</div><div>sync</div></div>');
    })

    test("mixed components with depth", async () => {
        const htmlString = await transpile(Promise.resolve(
            <div id="parent">
                <Async>
                    <Sync />
                </Async>
                <Async children={<Sync />} />
            </div>
        ));
        expect(htmlString).toEqual('<div id="parent"><div>async</div><div>sync</div><div>async</div><div>sync</div></div>');
    })

    test('async components array', async () => {
        const htmlString = await transpile(Promise.resolve(
            [
                <Async />,
                <Sync />,
                <Async />,
                <Sync />
            ]
        ));
        expect(htmlString).toEqual('<div>async</div><div>sync</div><div>async</div><div>sync</div>');
    })

    test('sync sync async', async () => {
        const htmlString = await transpile(Promise.resolve(
            <Sync>
                <Sync>
                    <Async />
                </Sync>
            </Sync>
        ));
        expect(htmlString).toEqual('<div>sync</div><div>sync</div><div>async</div>');
    })

    test('sync layout, sync children', async () => {
        const htmlString = await transpile(Promise.resolve(
            <SyncLayout>
                <Sync />
                <Sync />
            </SyncLayout>
        ));
        expect(htmlString).toEqual('<div><div>sync</div><div>sync</div></div>');
    })
    
    test('async layout, sync children', async () => {
        const htmlString = await transpile(Promise.resolve(
            <AsyncLayout>
                <Sync />
                <Sync />
            </AsyncLayout>
        ));
        expect(htmlString).toEqual('<div><div>sync</div><div>sync</div></div>');
    })

    test('sync layout mixed children', async () => {
        const htmlString = await transpile(Promise.resolve(
            <SyncLayout>
                <Sync />
                <Async />
            </SyncLayout>
        ));
        expect(htmlString).toEqual('<div><div>sync</div><div>async</div></div>');
    })
    
    test('async layout mixed children', async () => {
        const htmlString = await transpile(Promise.resolve(
            <AsyncLayout>
                <Sync />
                <Async />
            </AsyncLayout>
        ));
        expect(htmlString).toEqual('<div><div>sync</div><div>async</div></div>');
    })

    test('non awaited async component', async () => {
        const result = transpile(<Async />);
        expect(result).toBeInstanceOf(Promise);
    })

    test('non awaited sync component', async () => {
        const result = transpile(<Sync />);
        expect(result).toEqual('<div>sync</div>');
    })

    test('async jsx factory', async () => {
        a();
        const result = jsxFactory(async () => <div>async</div>, {}, []);
        expect(result).prototype = a.prototype;
    })
})

