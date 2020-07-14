import React from "react";

//Removed Label
export default function SearchBar({ userSearchFunc }) {
    return (
        <input
            className="search-area-search-bar"
            data-testid="search-area-search-bar"
            type="text"
            placeholder="Search for countries"
            onChange={userSearchFunc}
        ></input>
    );
}
