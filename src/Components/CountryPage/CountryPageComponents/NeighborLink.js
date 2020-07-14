import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NeighborLink({ country3Code }) {
    const [fullCountryName, setFullCountryName] = useState(null);

    //Gets and sets fullCountryName
    useEffect(() => {
        async function getFullName() {
            const res = await fetch(
                `https://restcountries.eu/rest/v2/alpha/${country3Code}`
            );
            const country = await res.json();
            setFullCountryName(country.name);
        }

        getFullName();
    }, []);

    return (
        <Link to={`${fullCountryName}`}>
            <button className="country-page-main-info-neighbors-link">
                {country3Code}
            </button>
        </Link>
    );
}
