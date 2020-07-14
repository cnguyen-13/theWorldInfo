import React from "react";
import CountryCard from "../Components/Cards/CountryCard/CountryCard";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

//Tests
test("Renders component correctly", async () => {
    //Getting Data
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/col`);
    const testData = await res.json();
    const correctInfo = [
        `Capital: ${testData.capital}`,
        `Region: ${testData.region}`,
        `Population: ${testData.population}`,
    ];

    //Render component and test it
    const { getByTestId, getAllByTestId } = render(
        <Router>
            <CountryCard country={testData} />
        </Router>
    );
    const image = getByTestId("country-card-image");
    const name = getByTestId("country-card-text-title");
    const infoList = getAllByTestId("country-card-text-info");
    const linkBtn = getByTestId("country-card-btn");

    //Image
    expect(image.src).toBe(testData.flag);
    expect(image.alt).toBe(`${testData.name} Flag`);

    //Title
    expect(name.textContent).toBe(testData.name);

    //Infolist
    for (let i = 0; i < infoList.length; i++) {
        const text = infoList[i].textContent;
        expect(text).toBe(correctInfo[i]);
    }

    //Link Btn
    expect(linkBtn.textContent).toBe("More Details");
});
