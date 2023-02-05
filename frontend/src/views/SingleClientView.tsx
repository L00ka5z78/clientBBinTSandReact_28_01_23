import React, {useEffect, useState} from "react";
import {ClientEntity, GetSingleClientRes} from "types";
import {useParams} from "react-router-dom";

export const SingleClientView = () => {
    const [clientInfo, setClientInfo] = useState<GetSingleClientRes | null>(null);
    const {clientID} = useParams()
    // console.log(clientInfo);

    useEffect(() => {       //przenisc do pliku i zrobic klase/funkcje do fetchowania
        (async () => {
            const res = await fetch(`http://localhost:3001/client/${clientID}`);
            setClientInfo(await res.json());
            // const data = await res.json()
            // console.log(data);
        })();
        // console.log(setClientInfo);

        // zrob obsluge bledow jak przy delete w tableRow najlepiej w osobnym pliku

    }, [])

    if (clientInfo === null) {
        return null;
    }

    return (
        <>
            <h1>{clientInfo.client.name}</h1>
            <p>Client's ID is: <small>{clientInfo.client.id}</small></p>
            <p>Current email is: <small>{clientInfo.client.mail}</small></p>
            <p>Expected contact at: <small>{clientInfo.client.nextContactAt}</small></p>
            <p>Additional notes: <small>{clientInfo.client.notes}</small></p>
        </>
    )

}