import React, {useEffect, useState} from "react";
import {ClientTable} from "./ClientTable";
import {ClientEntity} from 'types';
import {Spinner} from "../spinner/Spinner";

export const ClientList = () => {
    // const [clientsList, setClientsList] = useState(null);
    const [clientsList, setClientsList] = useState<ClientEntity[] | null>(null);

    // const refreshClients = async () => {
    //     setClientsList(null);
    //     const res = await fetch('http://localhost:3001/client')
    //     const data = await res.json();
    //     setClientsList(data.clientsList);
    // };

    // useEffect(() => {
    //     refreshClients();
    // }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/client')
            const data = await res.json();
            setClientsList(data.clientsList);
            // setClientsList(data.clientList);
        })()
    }, [])

    if (clientsList === null) {
        return <p>loading...</p>
        // return <Spinner/>
    }
    // return <>
    {/*<h1>Clients</h1>*/}
    {/*<ClientTable clients={clientsList} onClientsChange={refreshClients}/>*/}
    // </>
    return <>
        <h1>Clients list</h1>
        <ClientTable clients={clientsList}/>
    </>
}