import { init, transpile } from "../src";

init();

test("Handle special attributes", () => {
    const element = (
        <div
            className="test"
            htmlFor="test">
        </div>
    );
    const htmlString = transpile(element);
    expect(htmlString).toEqual(`<div class="test" for="test"></div>`);
});