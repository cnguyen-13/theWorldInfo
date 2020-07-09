import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SearchRegion from "../Components/SearchArea/SearchRegion";

//Testing data
let regionState = "";
const regionsArr = ["All", "Americas", "Africa", "Asia", "Europe", "Oceania"];

function testingFunction(e) {
    const select = e.target;
    const idx = e.target.selectedIndex;
    const region = select.options[idx].value;
    regionState = region;
}

afterEach(cleanup);

//Tests
test("Render Component correctly", () => {
    const { getByTestId, getAllByTestId } = render(
        <SearchRegion onChangeRegionInput={testingFunction} />
    );
    const label = getByTestId("region-selector-label");
    const select = getByTestId("region-selector");
    const options = getAllByTestId("region-selector-option");
    expect(label.textContent).toBe("Filter by Region:");
    //Defaulted selected value of 'All'
    for (let i = 0; i < regionsArr.length; i++) {
        const selected = options[i].selected;
        i === 0 ? expect(selected).toBeTruthy() : expect(selected).toBeFalsy();
    }

    //option values
    fireEvent.change(select, { target: { value: "All" } });
    for (let i = 0; i < regionsArr.length; i++) {
        const text = options[i].textContent;
        expect(text).toBe(regionsArr[i]);
    }
});

test("Changing Select Dropdown list correctly", () => {
    const { getByTestId, getAllByTestId } = render(
        <SearchRegion onChangeRegionInput={testingFunction} />
    );

    const select = getByTestId("region-selector");
    const options = getAllByTestId("region-selector-option");
    for (let i = 0; i < regionsArr.length; i++) {
        fireEvent.change(select, { target: { value: regionsArr[i] } });
        for (let j = 0; j < regionsArr.length; j++) {
            const selected = options[j].selected;
            j === i
                ? expect(selected).toBeTruthy()
                : expect(selected).toBeFalsy();
        }
    }
});
