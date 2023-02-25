import { render } from "@testing-library/react";
import App from "../App";

function renderApp(){
    return render(<App />);
}

test("Make sure app launches", () => {
    renderApp();
})

