import React from 'react';
import {ClientTableRow} from "./ClientTableRow";
import {ClientEntity} from 'types'


interface Props {
    clients: ClientEntity[];
    onClientsChange: () => void;
}
export const ClientTable = (props: Props) => {
    // console.log(props.onClientsChange);
    console.log(props.clients);
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Next contact at</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                {props.clients.map(client => <ClientTableRow client={client} key={client.id} onClientsChange={props.onClientsChange} />)}
                </tbody>
            </table>
        </>

    )
}