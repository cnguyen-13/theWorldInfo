import React from "react";
const addCommasToNumber = require("../../../HelperFunctions/addCommasToNumber");

export default function CountryCardText({ name, capital, region, population }) {
    const data = [
        { label: "Capital", data: capital },
        { label: "Region", data: region },
        { label: "Population", data: addCommasToNumber(population) },
    ];

    return (
        <div className="country-card-text">
            <h2
                data-testid="country-card-text-title"
                className="country-card-text-title"
            >
                {name}
            </h2>

            {data.map((info) => {
                return (
                    <p
                        data-testid="country-card-text-info"
                        className="country-card-text-info"
                        key={info.label}
                    >
                        <strong className="country-card-text-info-label">
                            {info.label}:{" "}
                        </strong>
                        {info.data}
                    </p>
                );
            })}
        </div>
    );
}
