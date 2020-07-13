import React from "react";

export default function BackButton() {
    return (
        <button
            className="country-page-back-btn"
            onClick={() => {
                window.history.back();
            }}
        >
            Back
        </button>
    );
}
