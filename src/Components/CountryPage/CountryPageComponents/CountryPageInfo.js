import React from "react";
import NeighborLink from "./NeighborLink";

export default function CountryPageInfo({ countryData }) {
    //Data to display
    const name = { label: "Name", data: countryData.name };
    const capital = { label: "Capital", data: countryData.capital };
    const region = { label: "Region", data: countryData.region };
    const subRegion = { label: "Subregion", data: countryData.subregion };
    const population = { label: "Population", data: countryData.population };
    const area = { label: "Area", data: countryData.area };
    const currency = {
        label: "Currency",
        data: countryData.currencies[0].name,
    };
    const neighborCountries = countryData.borders;

    //Put data to display in array to use .map function in return statement
    const dataArr = [
        name,
        capital,
        region,
        subRegion,
        population,
        area,
        currency,
    ];

    return (
        <div data-testid="country-page-info" className="country-page-info">
            {dataArr.map((property) => {
                return property.data ? (
                    <p className="country-page-info-line" key={property.label}>
                        <strong>{`${property.label}`}</strong>
                        {`: ${property.data}`}
                    </p>
                ) : null;
            })}

            <div data-testid="neighbor-countries">
                {neighborCountries.length > 0 ? (
                    <>
                        <strong>Borders:</strong>
                        {neighborCountries.map((country) => {
                            return (
                                <NeighborLink
                                    country3Code={country}
                                    key={country}
                                />
                            );
                        })}
                    </>
                ) : (
                    <strong>No bordering countries</strong>
                )}
            </div>
        </div>
    );
}
