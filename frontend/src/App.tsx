import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {Footer} from "./components/footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {NotFoundView} from "./views/NotFoundView";
import {EditClientView} from "./views/EditClientView";
import {SingleClient} from "./components/Client/SingleClient";
import {ClientDeleted} from "./components/Client/ClientDeleted";
import {ClientUpdated} from "./views/ClientUpdated";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
                <Route path="/client/:clientID" element={<SingleClient/>}/>
                <Route path="/update/:clientID" element={<EditClientView />}/>
                <Route path="*" element={<NotFoundView/>}/>
                <Route path="/deleted" element={<ClientDeleted/>}/>
                <Route path="/updated" element={<ClientUpdated/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

