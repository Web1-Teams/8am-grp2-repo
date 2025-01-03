import React from "react";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/Nav";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardList from "./Components/CardList/CardList";
import Footer from "./Components/Footer/Footer";
import Spec from "./Components/spec/Main";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import "./App.css";


function App() {
    return (
        <Router>
            <Header/>
            <Nav/>
                <Switch>
                    <Route exact path="/">
                        <HeroSection/>
                        <CardList/>
                    </Route>
                    <Route path="/src/Components/spec/">
                        <Spec/>
                    </Route>
                </Switch>
            <Footer/>
        </Router>
    );
}

export default App;