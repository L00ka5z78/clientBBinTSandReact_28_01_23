import React, {MouseEvent, useEffect, useState} from "react";
import {ClientEntity, GetSingleClientRes} from "types";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Spinner} from "../spinner/Spinner";

import styles from './ClientTable.module.css'


export const SingleClient = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [clientInfo, setClientInfo] = useState<GetSingleClientRes | null>(null);
    const {clientID} = useParams()
    // console.log(clientInfo);
    const navigate = useNavigate()

    const handleEdit = () => {
        setLoading(true)
        navigate(`/update/${clientID}`)

        setLoading(false)
        if (loading) {
            return <Spinner/>        //DODAJ SPINNER JAK IDZIESZ DO DETALI PO KLIKU IMIENIA
        }
    }


    useEffect(() => {       //przenisc do pliku i zrobic klase/funkcje do fetchowania
        (async () => {
            const res = await fetch(`http://localhost:3001/client/${clientID}`);
            setClientInfo(await res.json());
            // const data = await res.json()
            // console.log(data);
        })();
        // console.log(setClientInfo);

        // zrob obsluge bledow jak przy delete w tableRow najlepiej w osobnym pliku

    }, [clientID])


    if (clientInfo === null) {
        return null;
    }
    const handleDelete = async (e: MouseEvent) => {
        e.preventDefault();
        // setLoading(true)

        if (!window.confirm(`Are you sure you want to remove ${clientInfo.client.name}?`)) {
            return;
        }
        const res = await fetch(`http://localhost:3001/client/${clientID}`, {
            method: 'DELETE',
        });
        const data = await res.json()
        // setLoading(false)
        //
        // if (loading) {
        //     return <Spinner/>        //DODAJ SPINNER JAK IDZIESZ DO DETALI PO KLIKU IMIENIA
        // }
        console.log(data);
        navigate(`/deleted`)

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error has occurred: ${error.message}`);
            return;
        }

    };

    return (
        <div className={styles.client_page}>
            <h1 className={styles.main__title}>{clientInfo.client.name}</h1>
            <p>Client's ID is: <small><i>{clientInfo.client.id}</i></small></p>
            <ul className={styles.client_details}>
                <li>Current email is: <mark>{clientInfo.client.mail}</mark></li>
                <li>Expected contact at: <small>{clientInfo.client.nextContactAt}</small></li>
                <li>Additional notes: <small>{clientInfo.client.notes}</small></li>
            </ul>
            <div className={styles.client_btn}>
                <button className={styles.btn} onClick={handleEdit}>Edit client data</button>
                <button className={styles.btn} onClick={handleDelete}>Delete client</button>
            </div>

            <p><Link to="/">Return to clients list</Link></p>
        </div>
    )
}