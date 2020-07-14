import React from "react";

export default function ThemeToggler({ changeThemeFunc, theme }) {
    return (
        <div className="top-bar-theme-toggler">
            <input
                id="theme-checkbox"
                data-testid="theme-checkbox"
                type="checkbox"
                onClick={changeThemeFunc}
            ></input>
            <label htmlFor="theme-checkbox" data-testid="theme-value">
                {theme}
            </label>
        </div>
    );
}
