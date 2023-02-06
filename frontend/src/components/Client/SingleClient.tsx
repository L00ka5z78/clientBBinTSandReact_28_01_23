// import React, {MouseEvent, useEffect, useState} from "react";
// import {ClientEntity, GetSingleClientRes} from "types";
// import {Link, useNavigate, useParams} from "react-router-dom";
//
// // interface Props {
// //     client: ClientEntity;
// // onClientsChange: () => void;
// // }
//
//
// export const SingleClient = () => {
//
//     const [clientInfo, setClientInfo] = useState<GetSingleClientRes | null>(null);
//     const {clientID} = useParams()
//     // console.log(clientInfo);
//     const navigate = useNavigate()
//
//     const handleEdit = () => {
//         navigate(`/update/${clientID}`)
//     }
//
//
//     useEffect(() => {       //przenisc do pliku i zrobic klase/funkcje do fetchowania
//         (async () => {
//             const res = await fetch(`http://localhost:3001/client/${clientID}`);
//             setClientInfo(await res.json());
//             // const data = await res.json()
//             // console.log(data);
//         })();
//         // console.log(setClientInfo);
//
//         // zrob obsluge bledow jak przy delete w tableRow najlepiej w osobnym pliku
//
//     }, [])
//


//     if (clientInfo === null) {
//         return null;
//     }
//     // function handleDelete (e: MouseEvent) {
//     //     const res = fetch(`http://localhost:3001/client/${clientID}`, {
//     //         method: 'DELETE',
//     //     });
//
//
//     console.log('deleting...');
// }
//
// return (
//     <>
//         <h1>{clientInfo.client.name}</h1>
//         <p>Client's ID is: <small><i>{clientInfo.client.id}</i></small></p>
//         <div>
//             <p>Current email is: <mark>{clientInfo.client.mail}</mark></p>
//             <p>Expected contact at: <small><sup>{clientInfo.client.nextContactAt}</sup></small></p>
//             <p>Additional notes: <small>{clientInfo.client.notes}</small></p>
//
//         </div>
//         <div>
//             <button onClick={handleEdit}>Edit client data</button>
//
//             {/*<button>Delete client</button>*/}
//             {/*<button onClick={handleDelete}>Delete client</button>*/}
//
//         </div>
//
//         <p><Link to="/">Return to clients list</Link></p>
//     </>
// )
// }

import React, {MouseEvent, useEffect, useState} from "react";
import {ClientEntity, GetSingleClientRes} from "types";
import {Link, useNavigate, useParams} from "react-router-dom";

// interface Props {
//     client: ClientEntity;
// onClientsChange: () => void;
// }


export const SingleClient = () => {

    const [clientInfo, setClientInfo] = useState<GetSingleClientRes | null>(null);
    const {clientID} = useParams()
    // console.log(clientInfo);
    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/update/${clientID}`)
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

    }, [])



    if (clientInfo === null) {
        return null;
    }
    // const handleDelete = (e: MouseEvent) => {
    //     const res = fetch(`http://localhost:3001/client/${clientID}`, {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": 'application/json',
    //         },
    //         body: JSON.stringify({
    //             clientID: clientInfo
    //         })
    //     })
    // };       //NIE WIEM CZY DOBRZE

    return (
        <>
            <h1>{clientInfo.client.name}</h1>
            <p>Client's ID is: <small><i>{clientInfo.client.id}</i></small></p>
            <div>
                <p>Current email is: <mark>{clientInfo.client.mail}</mark></p>
                <p>Expected contact at: <small><sup>{clientInfo.client.nextContactAt}</sup></small></p>
                <p>Additional notes: <small>{clientInfo.client.notes}</small></p>

            </div>
            <div>
                <button onClick={handleEdit}>Edit client data</button>
                <button>Delete client</button>
                {/*<button onClick={handleDelete}>Delete client</button>*/}
            </div>

            <p><Link to="/">Return to clients list</Link></p>
        </>
    )
}