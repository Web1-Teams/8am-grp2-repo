import React from "react";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/Nav";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardList from "./Components/CardList/CardList";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/signup/Signup";
import Spec from "./Components/spec/Main";
import Signin from "./Components/signin/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // لاحظ استخدام Switch هنا
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Nav />
            <Switch> 

                <Route exact path="/" render={() => (
                    <>
                        <HeroSection />
                        <CardList />
                    </>
                )} />


                <Route path="/spec" component={Spec} />


                <Route path="/signin" component={Signin} />

                <Route path="/signup" component={Signup} />
            </Switch>
           
        </Router>
    );
}

export default App;
