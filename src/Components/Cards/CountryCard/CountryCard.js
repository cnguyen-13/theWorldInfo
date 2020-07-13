import React from "react";
import CountryCardImage from "./CountryCardImage";
import CountryCardText from "./CountryCardText";
import CountryCardButton from "./CountryCardButton";

export default function CountryCard({ countryJson }) {
    //All data should be here by then
    const name = countryJson.name;
    const capital = countryJson.capital;
    const region = countryJson.region;
    const population = countryJson.population;
    const flagUrl = countryJson.flag;

    return (
        <div className="country-card">
            <CountryCardImage src={flagUrl} name={name} />
            <CountryCardText
                name={name}
                capital={capital}
                region={region}
                population={population}
            />
            <CountryCardButton name={name} />
        </div>
    );
}
