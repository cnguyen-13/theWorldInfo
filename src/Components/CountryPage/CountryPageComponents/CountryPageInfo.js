import React from "react";
import InfoLines from "./InfoLines";
import BorderCountries from "./BorderCountries";
const addCommasToNumber = require("../../../HelperFunctions/addCommasToNumber");

export default function CountryPageInfo({ country }) {
    //Data to display
    const name = { label: "Name", data: country.name };
    const capital = { label: "Capital", data: country.capital };
    const region = { label: "Region", data: country.region };
    const subRegion = { label: "Subregion", data: country.subregion };
    const population = {
        label: "Population",
        data: addCommasToNumber(country.population),
    };
    const area = { label: "Area", data: addCommasToNumber(country.area) };
    const currency = {
        label: "Currency",
        data: country.currencies[0].name,
    };
    //Put data to display in array to use .map function in return statement
    const countryProperties = [
        name,
        capital,
        region,
        subRegion,
        population,
        area,
        currency,
    ];

    const neighborCountries = country.borders;

    return (
        <div
            data-testid="country-page-main-info"
            className="country-page-main-info"
        >
            <InfoLines countryProperties={countryProperties} />
            <BorderCountries neighborCountries={neighborCountries} />
        </div>
    );
}
