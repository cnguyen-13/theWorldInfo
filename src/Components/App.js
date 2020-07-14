import React, { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import SearchArea from "./SearchArea/SearchArea";
import CountryCardContainer from "./Cards/CountryCardContainer";
import CountryPage from "./CountryPage/CountryPage";
import CountriesNotFound from './Messages/CountriesNotFound';
import { Switch, Route } from "react-router-dom";
import "../styles/styles.css";

//countries and all api calls will result in returning AN ARRAY OF OBJECTS
export default function App() {
    const [theme, setTheme] = useState("light");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [countries, setCountries] = useState([]);

    //Initial Data
    useEffect(() => {
        async function getAllCountries() {
            const res = await fetch(`https://restcountries.eu/rest/v2/all`);
            const countries = await res.json();
            setCountries(countries);
        }

        getAllCountries();
    }, []);

    //Search functionality
    useEffect(() => {
        async function searchCountries() {
            const res =
                region === "All"
                    ? await fetch(`https://restcountries.eu/rest/v2/all`)
                    : await fetch(
                          `https://restcountries.eu/rest/v2/region/${region}`
                      );
            const countries = await res.json();
            const filteredCountries = countries.filter((country) => {
                return country.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
            setCountries(filteredCountries);
        }

        searchCountries();
    }, [region, search]);

    //Change Theme
    function changeThemeFunc() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    //Change Searched countries
    function userSearchFunc(e) {
        const userSearchInput = e.target.value;
        setSearch(userSearchInput);
    }

    //Change Regions
    function userRegionFunc(e) {
        const dropdownMenu = e.target;
        const idx = dropdownMenu.selectedIndex;
        const selectedRegion = dropdownMenu.options[idx].value;
        setRegion(selectedRegion);
    }

    return (
        <div className="app">
            <TopBar changeThemeFunc={changeThemeFunc} theme={theme} />

            <Switch>
                <Route path="/:countryName">
                    <CountryPage />
                </Route>
                <Route path="/">
                    <SearchArea
                        userSearchFunc={userSearchFunc}
                        userRegionFunc={userRegionFunc}
                    />
                    {countries.length > 0 ? (
                        <CountryCardContainer countries={countries} />
                    ) : (
                        <CountriesNotFound />
                    )}
                </Route>
            </Switch>
        </div>
    );
}
