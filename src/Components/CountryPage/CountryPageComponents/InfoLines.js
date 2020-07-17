import React from "react";

export default function InfoLines({ name, countryProperties }) {
    return (
        <>
            <h2 className="country-page-main-info-line-name">{name}</h2>
            {countryProperties.map((property) => {
                return property.data ? (
                    <p
                        className="country-page-main-info-line"
                        key={property.label}
                    >
                        <strong>{`${property.label}`}</strong>
                        {`: ${property.data}`}
                    </p>
                ) : null;
            })}
        </>
    );
}
