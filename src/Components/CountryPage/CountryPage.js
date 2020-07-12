import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import MainSection from "./MainSection";
import { useParams } from "react-router-dom";

export default function CountryPage() {
    const { countryName, neighbor } = useParams();
    const [countryData, setCountryData] = useState(null);
    //CHeck for 3 letter code of countries as well
    useEffect(() => {
        async function getCountryData() {
            let res;
            console.log(countryName, countryName.length);
            if (neighbor) {
                res = await fetch(
                    `https://restcountries.eu/rest/v2/alpha/${countryName}`
                );
            } else {
                res = await fetch(
                    `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
                );
            }

            const data = await res.json();
            setCountryData(data[0]);
        }
        console.log(countryData);
        getCountryData();
    }, [countryName]);

    if (countryData) {
        return (
            <div className="country-page">
                <BackButton />
                <MainSection countryData={countryData} />
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}
