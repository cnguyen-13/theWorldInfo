import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NeighborLink({ country3Code }) {
    const [fullCountryName, setFullCountryName] = useState(null);

    //Gets full country name
    useEffect(() => {
        async function getFullName() {
            const res = await fetch(
                `https://restcountries.eu/rest/v2/alpha/${country3Code}`
            );
            const data = await res.json();
            setFullCountryName(data.name);
        }
        getFullName();
    }, []);

    if (fullCountryName) {
        return (
            <Link to={`${fullCountryName}`}>
                <button className="neighbor-link-btn">{country3Code}</button>
            </Link>
        );
    }
    return null;
}
