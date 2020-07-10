import React from "react";
import CountryCard from "./CountryCard/CountryCard";

export default function CountryCardContainer({ countries }) {
    //Make cards here
    //App ----> Countries ----> array of objects

    return (
        <div
            data-testid="country-cards-container"
            className="country-cards-container"
        >
            {countries.map((country) => {
                return <CountryCard countryJson={country} key={country.name} />;
            })}
        </div>
    );
}
