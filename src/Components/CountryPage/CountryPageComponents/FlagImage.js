import React from "react";

export default function FlagImage({ flagUrl, name }) {
    return (
        <img
            data-testid="country-page-main-image"
            className="country-page-main-image"
            src={flagUrl}
            alt={`${name} Flag`}
        />
    );
}
