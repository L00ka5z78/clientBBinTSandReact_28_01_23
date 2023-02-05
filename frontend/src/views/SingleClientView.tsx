import React, {useEffect, useState} from "react";
import {ClientEntity, GetSingleClientRes} from "types";
import {useParams} from "react-router-dom";

export const SingleClientView = () => {
    const [clientInfo, setClientInfo] = useState<ClientEntity | null>(null);
    const {clientID} = useParams()
    // console.log(clientInfo);

    useEffect(() => {       //przenisc do pliku i zrobic klase funkcje do fetchowania
        (async () => {
            const res = await fetch(`http://localhost:3001/client/${clientID}`);
            const data = await res.json()
            console.log(data);
        })();
        // console.log(setClientInfo);

        // zrob obsluge bledow jak przy delete w tableRow najlepiej w osobnym pliku

    }, [])

    if (clientInfo === null) {
        return null;
    }

    return (
        <>
            <h1>cos widac!!!!!!!!!!!!!!11111</h1>
            <h1>{clientInfo.name}</h1>
            <p>Client's ID is: <small>{clientInfo.id}</small></p>
            <p>Current email is: <small>{clientInfo.mail}</small></p>
            <p>Expected contact at: <small>{clientInfo.nextContactAt}</small></p>
            <p>Additional notes: <small>{clientInfo.notes}</small></p>
        </>
    )

}