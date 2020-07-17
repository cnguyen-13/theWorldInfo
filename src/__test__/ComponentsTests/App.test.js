import React from "react";
import App from "../../Components/App";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

test("Rendering App Correctly", () => {
    const { getByTestId } = render(
        <Router>
            <App />
        </Router>
    );
    const mainContainer = getByTestId("app");
    expect(mainContainer.classList.contains("light-themed")).toBeTruthy();
    expect(mainContainer.classList.contains("dark-themed")).toBeFalsy();
});
