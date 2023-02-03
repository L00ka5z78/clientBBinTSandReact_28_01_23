import React, {MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import {ClientEntity} from 'types';


interface Props {
    client: ClientEntity;
    // onClientsChange: () => void;
}

export const ClientTableRow = (props: Props) => {
    const deleteClient = async (e: MouseEvent) => {
        e.preventDefault();
        if (!window.confirm(`Are you sure you want to remove ${props.client.name}?`)) {
            return;
        }
    //     const res = await fetch(`http://localhost:3001/client/${props.client.id}`, {
    //         method: 'DELETE',
    //     });
    //     if ([400, 500].includes(res.status)) {
    //         const error = await res.json();
    //         alert(`Error has occurred: ${error.message}`);
    //         return;
    //     }
    //     props.onClientsChange();
    };

    return (
        <tr>
            <td>{props.client.id}</td>
            {/*<Link to={`/client/${props.client.id}`}>*/}
            {/*    {props.client.name}*/}
            {/*</Link>*/}
            <td>{props.client.name}</td>
            <td>{props.client.mail}</td>
            <td>{props.client.nextContactAt}</td>
            <td>{props.client.notes}</td>

            <td>
            <a href="#" onClick={deleteClient}>🗑</a>
            </td>

        </tr>
    );
};

