import React from "react";
import LogoTitle from "./LogoTitle";
import ThemeToggler from "./ThemeToggler";

export default function TopBar({ themeTogglerFunc, theme }) {
    return (
        <header className="app-header">
            <LogoTitle />
            <ThemeToggler themeTogglerFunc={themeTogglerFunc} theme={theme} />
        </header>
    );
}
