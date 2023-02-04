import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {AddClient} from "./components/AddClient/AddClient";
import {Footer} from "./components/footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
            </Routes>
            <Footer/>
        </>
    )
}