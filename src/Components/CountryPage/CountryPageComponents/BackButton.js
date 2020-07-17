import React from "react";

export default function BackButton() {
    //Allows user to go back to previous page (if it exists)
    function goBack() {
        window.history.back();
    }

    return (
        <button className="country-page-back-btn" onClick={goBack}>
            Back
        </button>
    );
}
