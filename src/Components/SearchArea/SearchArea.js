import React from "react";
import SearchBar from "./SearchBar";
import SearchRegion from "./SearchRegion";

export default function SearchArea({ onChangeTextInput, onChangeRegionInput }) {
    return (
        <div className="search-area">
            <SearchBar onChangeTextInput={onChangeTextInput} />
            <SearchRegion onChangeRegionInput={onChangeRegionInput} />
        </div>
    );
}
