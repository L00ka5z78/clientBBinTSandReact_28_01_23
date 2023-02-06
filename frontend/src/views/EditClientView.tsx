import React, {FormEvent, useState} from "react";
import styles from "../components/AddClient/AddClient.module.css";
import {ClientEntity, CreateClientReq} from "types";
import {Spinner} from "../components/spinner/Spinner";
import {useParams} from "react-router-dom";

// interface Props {
//     client: ClientEntity;
//     onClientsChange: () => void;
// }

export const EditClientView = () => {
    const {clientID} = useParams()

    const [form, setForm] = useState<ClientEntity>({
        name: '',
        mail: "",
        nextContactAt: "",
        notes: "",
    });

    const [loading, setLoading] = useState<boolean>(false)
    const[resultInfo, setResultInfo] = useState<string | null>()



    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,        //zwracamy poprzednia wartosc i modyfikujemy tylko to co w kluczu na ta wartosc
            [key]: value,
        }));
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        //przenies do osobnej funkcji
        const res = await fetch(`http://localhost:3001/client`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data: ClientEntity = await res.json();    //pobierz z cliententity i wypisz
        setLoading(false);
        setResultInfo(`Client ${data.name} added with ID ${data.id}`)
    }





    if (loading) {
        return <Spinner/>
    }
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Edit client'sDANE-IMIE data</h2>
                <p>
                    <label>
                        Name: <br/>
                        <input
                            type="text"
                            placeholder="insert your name..."
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            // zaktualizuj pole name o wartosc e.target.value
                        />
                    </label>
                </p>

                <p>
                    <label>
                        E-mail: <br/>
                        <input
                            type="email"
                            placeholder="enter valid @..."
                            value={form.mail}
                            onChange={e => updateForm('mail', e.target.value)}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        Next contact at: <br/>
                        <input
                            placeholder="i can't wait for you..."
                            value={form.nextContactAt}
                            onChange={e => updateForm('nextContactAt', e.target.value)}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        Notes: <br/>
                        <textarea
                            placeholder="notes..."
                            value={form.notes}
                            onChange={e => updateForm('notes', e.target.value)}
                        />
                    </label>
                </p>

                <button type="submit">Save changes</button>
            </form>
        </>
    )
}