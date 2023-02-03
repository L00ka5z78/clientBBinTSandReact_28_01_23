import React from 'react';
import './App.css';
import {ClientView} from "./views/ClientView";
import {ClientList} from "./components/Client/ClientList";

export const App = () => {
    return (
        < div className="App">
            <ClientView/>
        </div>
    )
}