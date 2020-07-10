import React from "react";
import { Link } from "react-router-dom";

export default function CountryCardButton({ name }) {
    return (
        <Link to={`/${name}`}>
            <button data-testid="card-link-btn" className="card-link-btn">
                More Details
            </button>
        </Link>
    );
}
