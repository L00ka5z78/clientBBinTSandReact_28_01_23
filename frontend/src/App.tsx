import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {AddClient} from "./components/AddClient/AddClient";

export const App = () => {
    return (
        < div className="App">
            <ClientView/>
            <AddClient/>
        </div>
    )
}