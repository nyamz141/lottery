import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

function renderApp(){
    render(<App />);
}

test("Interface has 1 title that equals Sequence Setup",() => {
    renderApp();
    const sequenceSetupTitle = screen.getAllByText("Sequence Setup");
    expect(sequenceSetupTitle).toHaveLength(1)
    expect(sequenceSetupTitle[0].innerHTML).toEqual("Sequence Setup");
});

test("Interface has 4 input fields", () => {
    renderApp();
    const minInput = screen.getByTestId("min-generator-value");
    expect(minInput).toBeInTheDocument();
    const maxInput = screen.getByTestId("max-generator-value");
    expect(maxInput).toBeInTheDocument();
    const colInput = screen.getByTestId("generator-column-value");
    expect(colInput).toBeInTheDocument();
    const rowInput = screen.getByTestId("generator-row-value");
    expect(rowInput).toBeInTheDocument();
    
})

test("Find the Generate button and confirm its classes",() => {
    renderApp()
    const button = screen.getByText("Generate")
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn btn-success generator-action-button")
});

test("Find  the Reset button and confirm its classes", () => {
    renderApp()
    const button = screen.getByText("Reset")
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn btn-danger generator-action-button")
})