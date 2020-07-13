import React from "react";

export default function BackButton() {
    function goBack() {
        window.history.back();
    }

    return (
        <button className="country-page-back-btn" onClick={goBack}>
            Back
        </button>
    );
}
