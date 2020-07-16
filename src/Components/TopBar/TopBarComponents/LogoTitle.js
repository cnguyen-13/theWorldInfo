import React from "react";
import { Link } from "react-router-dom";

export default function LogoTitle() {
    return (
        <Link to="/" className="no-decoration">
            <h1 className="top-bar-title">The World Info</h1>
        </Link>
    );
}
