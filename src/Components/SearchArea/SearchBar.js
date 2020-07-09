import React from "react";

export default function SearchBar({ onChangeTextInput }) {
    return (
        <div className="search-bar">
            <label htmlFor="search-input">Country Search</label>
            <input
                id="search-input"
                type="text"
                data-testid="search-input"
                placeholder="Search for countries"
                onChange={onChangeTextInput}
            ></input>
        </div>
    );
}
