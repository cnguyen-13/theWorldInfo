import React from "react";
import SearchBar from "../../Components/SearchArea/SearchAreaComponents/SearchBar";
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
    "RePublic of",
];

function testingFunction(e) {
    const typedText = e.target.value;
    text = typedText;
}

let text = "";

afterEach(cleanup);

//Tests
test("Rendering SearchBar correctly", () => {
    const { getByTestId } = render(
        <SearchBar userSearchFunc={testingFunction} />
    );
    const searchBar = getByTestId("search-area-search-bar");
    expect(searchBar.value).toBe("");
    expect(text).toBe(searchBar.value);
});

test("SearchBar changes text properly", () => {
    const { getByTestId } = render(
        <SearchBar userSearchFunc={testingFunction} />
    );
    const searchBar = getByTestId("search-area-search-bar");
    for (let i = 0; i < sampleText.length; i++) {
        const text = sampleText[i];
        fireEvent.change(searchBar, { target: { value: text } });
        expect(searchBar.value).toBe(text);
        expect(text).toBe(text);
    }
});
