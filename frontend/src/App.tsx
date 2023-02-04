import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {AddClient} from "./components/AddClient/AddClient";
import {Link, Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <>
            <h1>Wstaw navbara...</h1>
            Hederek z linkiem: <Link to="/add">Switch to addClient </Link>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
            </Routes>
            <h3>A tu footerka</h3>
            <Link to="/test">Switch to test</Link>

        </>
    )
}