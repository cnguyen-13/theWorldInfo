import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import MainSection from "./MainSection";
import { Link } from "react-router-dom";

export default function NeighborLink({ country }) {
    return (
        <Link to={`${country}`}>
            <button>{country}</button>
        </Link>
    );
}
