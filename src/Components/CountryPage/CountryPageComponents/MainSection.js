import React from "react";
import FlagImage from "./FlagImage";
import CountryPageInfo from "./CountryPageInfo";

export default function MainSection({ countryData }) {
    const flag = countryData.flag;
    const name = countryData.name;

    return (
        <div data-testid="country-page-main" className="country-page-main">
            <FlagImage src={flag} name={name} />
            <CountryPageInfo countryData={countryData} />
        </div>
    );
}
