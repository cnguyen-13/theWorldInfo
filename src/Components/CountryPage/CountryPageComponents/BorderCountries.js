import React from "react";
import NeighborLink from "./NeighborLink";
import NoBorderCountriesMessage from "../../Messages/NoBorderCountriesMessage";

export default function BorderCountries({ neighborCountries }) {
    return (
        <div data-testid="neighbor-countries">
            {neighborCountries.length > 0 ? (
                <>
                    <strong className="country-page-main-info-neighbors-label country-page-main-info-line">
                        Borders:
                    </strong>
                    {neighborCountries.map((country) => {
                        return (
                            <NeighborLink
                                country3Code={country}
                                key={country}
                            />
                        );
                    })}
                </>
            ) : (
                <NoBorderCountriesMessage />
            )}
        </div>
    );
}
