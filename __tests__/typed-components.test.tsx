import { init, transpile } from "../src";

init();

type TestProps = {
    name: string;
    age: number;
};

type TestComponentFunction = (props: TestProps) => JSX.Element;

const TestComponent: TestComponentFunction = (props: TestProps) => {
    return <div>{props.name} {props.age}</div>;
}

test("No props Test", () => {
    const Component: JSX.FunctionComponent<TestProps> = TestComponent;
    expect(transpile(
        <Component name="John" age={30} />
    )).toBe(`<div>John 30</div>`);
});