import React from "react";

export default function FlagImage({ src, name }) {
    return <img data-testid="country-page-image" src={src} alt={name} />;
}
