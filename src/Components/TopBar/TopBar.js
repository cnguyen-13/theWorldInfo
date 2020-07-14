import React from "react";
import LogoTitle from "./TopBarComponents/LogoTitle";
import ThemeToggler from "./TopBarComponents/ThemeToggler";

export default function TopBar({ changeThemeFunc, theme }) {
    return (
        <header className="top-bar">
            <LogoTitle />
            <ThemeToggler changeThemeFunc={changeThemeFunc} theme={theme} />
        </header>
    );
}
