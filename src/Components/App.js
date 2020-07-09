import React, { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import SearchArea from "./SearchArea/SearchArea";

function App() {
    const [theme, setTheme] = useState("light");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("all");

    function changeThemeFunc() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    function onChangeTextInput(e) {
        const typedText = e.target.value;
        setSearch(typedText);
        //Then filter out all of the countries
    }

    function onChangeRegionInput(e) {
        const select = e.target;
        const idx = e.target.selectedIndex;
        const region = select.options[idx].value;
        setRegion(region);
    }

    return (
        <div className="app">
            <TopBar themeTogglerFunc={changeThemeFunc} theme={theme} />
            <SearchArea
                onChangeTextInput={onChangeTextInput}
                onChangeRegionInput={onChangeRegionInput}
            />
        </div>
    );
}

export default App;
