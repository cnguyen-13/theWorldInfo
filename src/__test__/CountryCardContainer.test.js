import React from "react";
import CountryCardContainer from "../Components/Cards/CountryCardContainer";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

//Testing Data
afterEach(cleanup);
const testingJsonUrls = [
    `https://restcountries.eu/rest/v2/all`,
    `https://restcountries.eu/rest/v2/region/europe`,
    `https://restcountries.eu/rest/v2/name/united`,
    `https://restcountries.eu/rest/v2/region/oceania`,
];

//Tests
for (let i = 0; i < testingJsonUrls.length; i++) {
    test(`Render component correctly with Link: ${testingJsonUrls[i]}`, async () => {
        const res = await fetch(testingJsonUrls[i]);
        const data = await res.json();
        const testingData = data;
        const numberOfCountries = testingData.length;
        const { getByTestId } = render(
            <Router>
                <CountryCardContainer countries={testingData} />
            </Router>
        );
        const container = getByTestId("country-cards-container");
        const childrenCount = container.childElementCount;
        expect(childrenCount).toBe(numberOfCountries);
    });
}
