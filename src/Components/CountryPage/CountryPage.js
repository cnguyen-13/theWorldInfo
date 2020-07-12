import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import MainSection from "./MainSection";
import { useParams } from "react-router-dom";

export default function CountryPage() {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);
    //CHeck for 3 letter code of countries as well
    useEffect(() => {
        async function getCountryData() {
            console.log("ran");
            setCountryData(null);
            const res =
                countryName.length === 3
                    ? await fetch(
                          `https://restcountries.eu/rest/v2/alpha/${countryName}`
                      )
                    : await fetch(
                          `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
                      );
            // let res;
            // if (countryName.length === 3) {
            //     res = await fetch(
            //         `https://restcountries.eu/rest/v2/alpha/${countryName}`
            //     );
            // } else {
            //     res = await fetch(
            //         `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
            //     );
            // }

            const data = await res.json();
            setCountryData(data[0]);
        }
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
