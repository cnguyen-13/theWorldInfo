import React from "react";

export default function InfoLines({ countryProperties }) {
    return (
        <>
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
