import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {AddClient} from "./components/AddClient/AddClient";
import {Footer} from "./components/footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {NotFoundView} from "./views/NotFoundView";
import {TestView} from "./views/TestView";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
                <Route path="/mamma" element={<TestView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
            <Footer/>
        </>
    )
}