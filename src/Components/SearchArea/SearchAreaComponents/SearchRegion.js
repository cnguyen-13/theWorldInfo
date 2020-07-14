import React from "react";

const regions = ["All", "Americas", "Africa", "Asia", "Europe", "Oceania"];

export default function SearchRegion({ userRegionFunc }) {
    return (
        <div>
            <label
                htmlFor="search-area-region-selector"
                data-testid="search-area-region-menu-label"
                className="search-area-region-menu-label"
            >
                Filter by Region:
            </label>
            <select
                id="search-area-region-selector"
                data-testid="search-area-region-menu"
                className="search-area-region-menu"
                onChange={userRegionFunc}
                defaultValue="All"
            >
                {regions.map((region) => {
                    return (
                        <option
                            data-testid="search-area-region-menu-option"
                            className="search-area-region-menu-option"
                            value={region}
                            key={region}
                        >
                            {region}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
