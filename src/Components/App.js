import React, { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import SearchArea from "./SearchArea/SearchArea";
import CountryCardContainer from "./Cards/CountryCardContainer";
import CountryPage from "./CountryPage/CountryPage";
import { Switch, Route } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("light");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [filteredData, setFilteredData] = useState(null);

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
            if (region === "All") {
                const res = await fetch(`https://restcountries.eu/rest/v2/all`);
                const data = await res.json();
                const newFilteredData = data.filter((country) => {
                    return country.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                });
                setFilteredData(newFilteredData);
            } else {
                const regionRes = await fetch(
                    `https://restcountries.eu/rest/v2/region/${region}`
                );
                const regionData = await regionRes.json();

                //Search names
                const newFilteredData = regionData.filter((country) => {
                    return country.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                });
                setFilteredData(newFilteredData);
            }
        }

        getFilteredData();
    }, [region, search]);

    //Change Theme
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
