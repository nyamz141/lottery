import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

function renderApp(){
    render(<App />);
}

test("Attempt to generate a sequence", () => {
    renderApp();
    const minInput = screen.getByTestId("min-generator-value");
    expect(minInput).toBeInTheDocument();
    const maxInput = screen.getByTestId("max-generator-value");
    expect(maxInput).toBeInTheDocument();
    const colInput = screen.getByTestId("generator-column-value");
    expect(colInput).toBeInTheDocument();
    const rowInput = screen.getByTestId("generator-row-value");
    expect(rowInput).toBeInTheDocument();

    const button = screen.getByText("Generate")
    expect(button).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        userEvent.type(minInput,"1");
        userEvent.type(maxInput,"1");
        userEvent.type(colInput,"1");
        userEvent.type(rowInput,"1");
        button.click()
    })

    const resultParent = screen.getByTestId("results-parent-element")
    expect(resultParent).toBeInTheDocument();
})