import React from "react";
import SearchBar from "./SearchAreaComponents/SearchBar";
import SearchRegion from "./SearchAreaComponents/SearchRegion";

export default function SearchArea({ userSearchFunc, userRegionFunc }) {
    return (
        <div className="search-area">
            <SearchBar userSearchFunc={userSearchFunc} />
            <SearchRegion userRegionFunc={userRegionFunc} />
        </div>
    );
}
