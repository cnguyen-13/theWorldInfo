import React from "react";
import SearchBar from "../Components/SearchArea/SearchBar";
import { render, fireEvent, cleanup } from "@testing-library/react";

//Testing Data
const sampleText = [
    "america1",
    "GeRmAnY",
    "agws",
    "south",
    "FRaNce",
    "UK",
    "CHINA",
];

function testingFunction(e) {
    const typedText = e.target.value;
    text = typedText;
}

let text = "";

afterEach(cleanup);

//Tests
test("Rending SearchBar correctly", () => {
    const { getByTestId } = render(
        <SearchBar onChangeTextInput={testingFunction} />
    );
    const searchBar = getByTestId("search-input");
    expect(searchBar.value).toBe("");
    expect(text).toBe("");
});

test("SearchBar changes text properly", () => {
    const { getByTestId } = render(
        <SearchBar onChangeTextInput={testingFunction} />
    );
    const searchBar = getByTestId("search-input");
    for (let i = 0; i < sampleText.length; i++) {
        fireEvent.change(searchBar, { target: { value: sampleText[i] } });
        expect(searchBar.value).toBe(sampleText[i]);
        expect(text).toBe(sampleText[i]);
    }
});
