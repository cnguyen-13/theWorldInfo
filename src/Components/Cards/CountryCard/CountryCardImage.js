import React from "react";

export default function CountryCardImage({ src, name }) {
    return (
        <img
            data-testid="country-card-image"
            className="country-card-image"
            src={src}
            alt={`${name} Flag`}
        ></img>
    );
}
