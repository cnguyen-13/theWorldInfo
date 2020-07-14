import React, { useState, useEffect } from "react";
import BackButton from "./CountryPageComponents/BackButton";
import MainSection from "./CountryPageComponents/MainSection";
import LoadingMessage from "../Messages/LoadingMessage";
import { useParams } from "react-router-dom";

export default function CountryPage() {
    const { countryName } = useParams();
    const [country, setCountry] = useState(null);

    //Fetching country data based off of countryName URL param
    useEffect(() => {
        async function getCountryData() {
            setCountry(null);
            const res = await fetch(
                `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
            );

            const data = await res.json();
            const country = data[0];
            setCountry(country);
        }

        getCountryData();
    }, [countryName]);

    if (country) {
        return (
            <div className="country-page">
                <BackButton />
                <MainSection country={country} />
            </div>
        );
    } else {
        return <LoadingMessage />;
    }
}
