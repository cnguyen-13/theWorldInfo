import React from "react";

const options = ["All", "Americas", "Africa", "Asia", "Europe", "Oceania"];

export default function SearchRegion({ onChangeRegionInput }) {
    return (
        <div>
            <label
                htmlFor="region-selector"
                data-testid="region-selector-label"
            >
                Filter by Region:
            </label>
            <select
                id="region-selector"
                data-testid="region-selector"
                onChange={onChangeRegionInput}
                defaultValue="All"
            >
                {options.map((option) => {
                    return (
                        <option
                            data-testid="region-selector-option"
                            value={option}
                            key={option}
                        >
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
