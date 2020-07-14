import React from "react";
import ThemeToggler from "../Components/TopBar/TopBarComponents/ThemeToggler";
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
});

test("Toggle Theme Correctly", () => {
    const { getByTestId } = render(
        <ThemeToggler theme="light" changeThemeFunc={changeTestingData} />
    );
    const checkbox = getByTestId("theme-checkbox");
    //Toggling test
    for (let i = 1; i < 10; i++) {
        fireEvent.click(checkbox);
        if (i % 2 === 0) {
            expect(checkbox.checked).toBeFalsy();
            expect(testingData.theme).toBe("light");
        } else {
            expect(checkbox.checked).toBeTruthy();
            expect(testingData.theme).toBe("dark");
        }
    }
});
