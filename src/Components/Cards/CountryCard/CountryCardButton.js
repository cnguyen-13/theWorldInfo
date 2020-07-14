import React from "react";
import { Link } from "react-router-dom";

export default function CountryCardButton({ name }) {
    return (
        <Link to={`/${name}`}>
            <button data-testid="country-card-btn" className="country-card-btn">
                More Details
            </button>
        </Link>
    );
}
