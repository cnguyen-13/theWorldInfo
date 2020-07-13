import React from "react";
import CountryCard from "../Components/Cards/CountryCard/CountryCard";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
//Sample Data
afterEach(cleanup);
const testData = {
    name: "Colombia",
    topLevelDomain: [".co"],
    alpha2Code: "CO",
    alpha3Code: "COL",
    callingCodes: ["57"],
    capital: "Bogotá",
    altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
    region: "Americas",
    subregion: "South America",
    population: 48759958,
    latlng: [4.0, -72.0],
    demonym: "Colombian",
    area: 1141748.0,
    gini: 55.9,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    nativeName: "Colombia",
    numericCode: "170",
    currencies: [
        {
            code: "COP",
            name: "Colombian peso",
            symbol: "$",
        },
    ],
    languages: [
        {
            iso639_1: "es",
            iso639_2: "spa",
            name: "Spanish",
            nativeName: "Español",
        },
    ],
    translations: {
        de: "Kolumbien",
        es: "Colombia",
        fr: "Colombie",
        ja: "コロンビア",
        it: "Colombia",
        br: "Colômbia",
        pt: "Colômbia",
    },
    flag: "https://restcountries.eu/data/col.svg",
    regionalBlocs: [
        {
            acronym: "PA",
            name: "Pacific Alliance",
            otherAcronyms: [],
            otherNames: ["Alianza del Pacífico"],
        },
        {
            acronym: "USAN",
            name: "Union of South American Nations",
            otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
            otherNames: [
                "Unión de Naciones Suramericanas",
                "União de Nações Sul-Americanas",
                "Unie van Zuid-Amerikaanse Naties",
                "South American Union",
            ],
        },
    ],
    cioc: "COL",
};

const correctInfo = [
    `Capital: ${testData.capital}`,
    `Region: ${testData.region}`,
    `Population: ${testData.population}`,
];

//Tests
test("Renders component correctly", () => {
    const { getByTestId, getAllByTestId } = render(
        <Router>
            <CountryCard country={testData} />
        </Router>
    );
    const image = getByTestId("card-image");
    const name = getByTestId("card-textarea-title");
    const infoList = getAllByTestId("card-textarea-description");
    const linkBtn = getByTestId("card-link-btn");
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
