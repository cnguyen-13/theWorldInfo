import React from "react";

export default function CountryNotFound({ nonExistentCountry }) {
    return (
        <p class="no-country-found">{`The country of "${nonExistentCountry}" doesn't exist in the world`}</p>
    );
}
