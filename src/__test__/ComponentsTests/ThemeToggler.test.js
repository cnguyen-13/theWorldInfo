import React from "react";
import ThemeToggler from "../../Components/TopBar/TopBarComponents/ThemeToggler";
import { render, fireEvent, cleanup } from "@testing-library/react";

//Testing Data
function changeTestingData() {
    testingData.theme === "light"
        ? (testingData.theme = "dark")
        : (testingData.theme = "light");
}

const testingData = { theme: "light" };

afterEach(cleanup);

//Tests
test("Render Correctly", () => {
    const { getByTestId } = render(
        <ThemeToggler theme="light" themeTogglerFunc={changeTestingData} />
    );
    const checkbox = getByTestId("theme-checkbox");
    //Initial Value
    expect(checkbox.checked).toBeFalsy();
    expect(testingData.theme).toBe("light");
    expect(testingData.theme).not.toBe("dark");
});
