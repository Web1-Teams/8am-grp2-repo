import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="/photo/logo.jpg" alt="Website Logo"/>
                    <h1>Tawjihikum Website </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
