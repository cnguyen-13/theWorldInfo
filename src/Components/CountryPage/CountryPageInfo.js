import React from "react";
import NeighborLink from "./NeighborLink";

export default function CountryPageInfo({ countryData }) {
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
                if (property.data) {
                    return (
                        <p
                            className="country-page-info-line"
                            key={property.label}
                        >{`${property.label}: ${property.data}`}</p>
                    );
                }
                return null;
            })}
            {neighborCountries.length > 0 ? (
                <div data-testid="neighbor-countries">
                    borders:
                    {neighborCountries.map((country) => {
                        return <NeighborLink country={country} key={country} />;
                    })}
                </div>
            ) : (
                <div data-testid="neighbor-countries">
                    No bordering countries
                </div>
            )}
        </div>
    );
}
