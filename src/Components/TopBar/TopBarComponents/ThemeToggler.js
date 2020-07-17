import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

export default function ThemeToggler({ changeThemeFunc, theme }) {
    return (
        <FormControlLabel
            data-testid="theme-checkbox"
            control={<Switch onChange={changeThemeFunc} />}
            label={theme}
        />
    );
}
