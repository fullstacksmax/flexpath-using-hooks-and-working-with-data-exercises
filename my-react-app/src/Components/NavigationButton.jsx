import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationButton() {
    const navigate = useNavigate()
    const goToAbout = () => navigate('./about')

    return (
        <button onClick={goToAbout}> go to about </button>
    )
}