import React, {useEffect, useState} from "react";
import {ClientTable} from "./ClientTable";
import {ClientEntity, CreateClientReq, ListClientRes} from 'types';
import {Spinner} from "../spinner/Spinner";

export const ClientList = () => {

    const [clients, setClients] = useState<ClientEntity[] | null>(null);

    console.log(clients);

   const refreshClientTable = (async () => {
       setClients(null);
        const res = await fetch('http://localhost:3001/client')
        const data = await res.json();

        // console.log(data);
        /* pokazuje pobrane dane z BE patrz na klucz w tablicy!!*/
        setClients(data.clients);
    })


    useEffect(() => {
        refreshClientTable()
    }, [])

    if (clients === null) {

        return <Spinner/>
    }

    return <>
        <h1>Clients list</h1>
        <ClientTable clients={clients} onClientsChange={refreshClientTable}/>
    </>
}