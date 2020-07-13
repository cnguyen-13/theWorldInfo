import React, { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import SearchArea from "./SearchArea/SearchArea";
import CountryCardContainer from "./Cards/CountryCardContainer";
import CountryPage from "./CountryPage/CountryPage";
import { Switch, Route } from "react-router-dom";
import "../styles/styles.css";

export default function App() {
    const [theme, setTheme] = useState("light");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [filteredData, setFilteredData] = useState([]);

    //Initial Data
    useEffect(() => {
        async function getAllCountries() {
            const res = await fetch(`https://restcountries.eu/rest/v2/all`);
            const data = await res.json();
            setFilteredData(data);
        }

        getAllCountries();
    }, []);

    //Search functionality
    useEffect(() => {
        async function getFilteredData() {
            const res =
                region === "All"
                    ? await fetch(`https://restcountries.eu/rest/v2/all`)
                    : await fetch(
                          `https://restcountries.eu/rest/v2/region/${region}`
                      );
            const data = await res.json();
            const newFilteredData = data.filter((country) => {
                return country.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
            setFilteredData(newFilteredData);
        }

        getFilteredData();
    }, [region, search]);

    //Change Theme
    function changeThemeFunc() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    //Change Searched countries
    function onChangeTextInput(e) {
        const typedText = e.target.value;
        setSearch(typedText);
    }

    //Change Regions
    function onChangeRegionInput(e) {
        const select = e.target;
        const idx = select.selectedIndex;
        const region = select.options[idx].value;
        setRegion(region);
    }

    return (
        <div className="app">
            <TopBar themeTogglerFunc={changeThemeFunc} theme={theme} />

            <Switch>
                <Route path="/:countryName">
                    <CountryPage />
                </Route>
                <Route path="/">
                    <SearchArea
                        onChangeTextInput={onChangeTextInput}
                        onChangeRegionInput={onChangeRegionInput}
                    />
                    {filteredData.length > 0 ? (
                        <CountryCardContainer countries={filteredData} />
                    ) : (
                        <p className="no-countries-found">
                            No countries found!
                        </p>
                    )}
                </Route>
            </Switch>
        </div>
    );
}
