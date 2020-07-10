import React from "react";

export default function CountryCardText({ name, capital, region, population }) {
    return (
        <div className="card-textarea">
            <h2
                data-testid="card-textarea-title"
                className="card-textarea-title"
            >
                {name}
            </h2>
            <p
                data-testid="card-textarea-description"
                className="card-textarea-description"
            >
                <strong>Capital:</strong> {capital}
            </p>
            <p
                data-testid="card-textarea-description"
                className="card-textarea-description"
            >
                <strong>Region: </strong>
                {region}
            </p>
            <p
                data-testid="card-textarea-description"
                className="card-textarea-description"
            >
                <strong>Population: </strong>
                {population}
            </p>
        </div>
    );
}
