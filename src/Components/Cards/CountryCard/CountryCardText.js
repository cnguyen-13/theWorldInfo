import React from "react";

export default function CountryCardText({ name, capital, region, population }) {
    const data = [
        { label: "Capital", data: capital },
        { label: "Region", data: region },
        { label: "Population", data: population },
    ];

    return (
        <div className="card-textarea">
            <h2
                data-testid="card-textarea-title"
                className="card-textarea-title"
            >
                {name}
            </h2>

            {data.map((info) => {
                return (
                    <p
                        data-testid="card-textarea-description"
                        className="card-textarea-description"
                        key={info.label}
                    >
                        <strong>{info.label}: </strong>
                        {info.data}
                    </p>
                );
            })}
        </div>
    );
}
