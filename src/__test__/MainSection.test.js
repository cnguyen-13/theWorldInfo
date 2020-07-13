import React from "react";
import MainSection from "../Components/CountryPage/CountryPageComponents/MainSection";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);
//Testing Data
for (let i = 0; i < 250; i++) {
    test(`Renders Correct for all Countries: Test #${i + 1}`, async () => {
        const testGroup = await fetch(`https://restcountries.eu/rest/v2/all`);
        const countries = await testGroup.json();
        const country = countries[i];

        const { getByTestId } = render(
            <Router>
                <MainSection countryData={country} />
            </Router>
        );
        const wrapperDiv = getByTestId("country-page-main");
        const flagImg = getByTestId("country-page-image");
        const info = getByTestId("country-page-info");
        //main div checking
        expect(wrapperDiv.childElementCount).toBe(2);
        expect(wrapperDiv.classList.contains("country-page-main")).toBeTruthy();
        //Flag checking
        expect(flagImg.src).toBe(country.flag);
        expect(flagImg.alt).toBe(country.name);
        //information checking
        const dataArr = [
            { label: "Name", data: country.name },
            { label: "Capital", data: country.capital },
            { label: "Region", data: country.region },
            { label: "Subregion", data: country.subregion },
            { label: "Population", data: country.population },
            { label: "Area", data: country.area },
            {
                label: "Currency",
                data: country.currencies[0].name,
            },
        ];
        const neighboringCountries = country.borders;

        const numberOfExpectedChildren =
            dataArr.filter((data) => {
                return data.data ? true : false;
            }).length + 1; //The + 1 is for the bordering countries element

        expect(info.childElementCount).toBe(numberOfExpectedChildren);
        //Neighbor countries testing
        const neighborsList = getByTestId("neighbor-countries");
        expect(neighborsList.childElementCount).toBe(
            neighboringCountries.length + 1
        ); //The + 1 is for the strong tag text
    });
}
