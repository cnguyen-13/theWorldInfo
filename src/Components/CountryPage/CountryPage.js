import React, { useState, useEffect } from "react";
import BackButton from "./CountryPageComponents/BackButton";
import MainSection from "./CountryPageComponents/MainSection";
import CountryNotFound from "../Messages/CountryNotFound";
import LoadingMessage from "../Messages/LoadingMessage";
import { useParams } from "react-router-dom";

export default function CountryPage() {
    const { countryName } = useParams();
    const [country, setCountry] = useState(null);
    const [countryNotFound, setCountryNotFound] = useState(false);

    //Fetching country data based off of countryName URL param
    useEffect(() => {
        async function getCountryData() {
            const res = await fetch(
                `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
            );

            const data = await res.json();
            const country = data[0];
            if (!country) {
                setCountryNotFound(true);
            } else {
                setCountry(country);
            }
        }

        getCountryData();
    }, [countryName]);

    if (countryNotFound) {
        return <CountryNotFound nonExistentCountry={countryName} />;
    } else if (country) {
        return (
            <div className="country-page">
                <div className="country-page-sub-container">
                    <BackButton />
                    <MainSection country={country} />
                </div>
            </div>
        );
    } else {
        return <LoadingMessage />;
    }
}
