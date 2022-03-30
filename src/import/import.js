import React from 'react';
import Header from "../components/Header/Header";
import Hero from "../components/hero/hero";
import About from "../components/about/About";
import Clients from "../components/clients/clients";

const Import = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Clients/>
        </div>
    );
};

export default Import;