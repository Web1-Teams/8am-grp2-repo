import React from "react";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/Nav";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardList from "./Components/CardList/CardList";
import Footer from "./Components/Footer/Footer";
import "./App.css";


function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <HeroSection/>
            <CardList/>
            <Footer/>
        </>
    );
}

export default App;