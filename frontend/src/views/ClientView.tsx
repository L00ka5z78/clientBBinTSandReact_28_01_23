import React from 'react';
import {ClientList} from "../components/Client/ClientList";
import {AddClient} from "../components/AddClient/AddClient";
import {Link} from "react-router-dom";

export const ClientView = () => (
    <>
        <ClientList/>
        <AddClient/>
    </>
);