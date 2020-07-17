import React from "react";
import CountryCardImage from "./CountryCardImage";
import CountryCardText from "./CountryCardText";
import CountryCardButton from "./CountryCardButton";

export default function CountryCard({ country }) {
    //All data should be here by then
    const name = country.name;
    const capital = country.capital;
    const region = country.region;
    const population = country.population;
    const flagUrl = country.flag;

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
