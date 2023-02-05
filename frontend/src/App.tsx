import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {Footer} from "./components/footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {NotFoundView} from "./views/NotFoundView";
import {SingleClientView} from "./views/SingleClientView";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
                <Route path="/client/:clientID" element={<SingleClientView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

