import React from "react";

export default function CountryCardImage({ src, name }) {
    return (
        <img
            data-testid="card-image"
            className="card-image"
            src={src}
            alt={`${name} Flag`}
        ></img>
    );
}
