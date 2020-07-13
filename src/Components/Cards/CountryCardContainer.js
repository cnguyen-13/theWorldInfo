import React from "react";
import CountryCard from "./CountryCard/CountryCard";

export default function CountryCardContainer({ countries }) {
    return (
        <div
            data-testid="country-cards-container"
            className="country-cards-container"
        >
            {countries.map((country) => {
                return <CountryCard country={country} key={country.name} />;
            })}
        </div>
    );
}
