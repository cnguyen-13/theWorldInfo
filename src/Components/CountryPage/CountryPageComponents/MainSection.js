import React from "react";
import FlagImage from "./FlagImage";
import CountryPageInfo from "./CountryPageInfo";

export default function MainSection({ country }) {
    const flagUrl = country.flag;
    const name = country.name;

    return (
        <div data-testid="country-page-main" className="country-page-main">
            <FlagImage flagUrl={flagUrl} name={name} />
            <CountryPageInfo country={country} />
        </div>
    );
}
