import React, { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import SearchArea from "./SearchArea/SearchArea";
import CountryCardContainer from "./Cards/CountryCardContainer";
import CountryPage from "./CountryPage/CountryPage";
import { Link, Switch, Route } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("light");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("all");
    const [allCountries, setAllCountries] = useState(null); //Just to store all data
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        async function getAllCountries() {
            const res = await fetch(`https://restcountries.eu/rest/v2/all`);
            const data = await res.json();
            setAllCountries(data);
            setFilteredData(data);
        }

        getAllCountries();
    }, []);

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

    //Add Switch and Links here
    return (
        <div className="app">
            <TopBar themeTogglerFunc={changeThemeFunc} theme={theme} />
            <Switch>
                <Route path="/:countryName/neighbor/:neighbor">
                    <CountryPage />
                </Route>
                <Route path="/:countryName">
                    <CountryPage />
                </Route>
                <Route path="/">
                    <SearchArea
                        onChangeTextInput={onChangeTextInput}
                        onChangeRegionInput={onChangeRegionInput}
                    />
                    {filteredData ? (
                        <CountryCardContainer countries={filteredData} />
                    ) : null}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
