import React from 'react';
import {ClientTableRow} from "./ClientTableRow";
import {ClientEntity} from 'types'
// import '../../index.css'

interface Props {
    clients: ClientEntity[];
    onClientsChange: () => void;
}

export const ClientTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Next contact date</th>
            <th>Notes</th>

        </tr>
        </thead>
        <tbody>
        {
            props.clients.map(client => (
                <ClientTableRow client={client}
                               key={client.id}
                                onClientsChange={props.onClientsChange}
                />
            ))
        }
        </tbody>
    </table>
);

