import React from "react";

export default function ThemeToggler({ theme, themeTogglerFunc }) {
    return (
        <div className="switch">
            <input
                id="theme-checkbox"
                data-testid="theme-checkbox"
                type="checkbox"
                onClick={themeTogglerFunc}
            ></input>
            <label htmlFor="theme-checkbox" data-testid="theme-value">
                {theme}
            </label>
        </div>
    );
}
