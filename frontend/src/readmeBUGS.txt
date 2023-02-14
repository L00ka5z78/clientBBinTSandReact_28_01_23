 ODSWIEZENIE STRONY PO DODANIU KIENTA*******************************************
//todo ZEBY NIE nRZEBA BYLO ODSWIEZAC STRONY Po  DODANIU NOWEGO KLIENTA ZEBY ZOBACZYC GO NA LISCIE zastepczo widok dodanego z komunikatem


AddClient.tsx

    /*pokazuje button, bez formularza. po kliku pokazuje form i po wyslaniu pokazuje komunikat i button. Moze byc, ALE po kliku pustego pokazuje komunikat ze undefined dodano..*/
    // if (resultInfo !== null) {
    //     return <div>
    //         <p><strong>{resultInfo}</strong></p>
    //         <button onClick={() => setResultInfo(null)}>Add client to list</button>
    //     </div>;
    // }

    //znika formularz!!!!!!!!!!!!!!!!!!!!!!!
    // if(resultInfo !== null) {
    //     return <p><strong>{resultInfo}</strong></p>
    // }
    //ZEBY NIE KRECIL SPINNER I NIE RZEBA BYLO ODSWIEZAC STRONY ZEBY ZOBACZYC DODANEGO KLIENTA TRZEBA DAC CONTEXT REDUX
            //36.40t5d3


ClienttableRow

  //dodaj spinnera/komunikat ze trwa usuwanie useState() pokazujacy ze trwa kasowanie

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error has occurred: ${error.message}`);      //daj chakre albo toastaza alerta
            return;
        }

 Navbar.tsx
 dodaj toasty/chakra

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     const path = '/register';
    //     navigate(path);
    // }

    // const showToast = () => {
    //     toast.success("Success message")
    // };
    //

     SingleClientView

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

 ODSWIEZENIE STRONY PO DODANIU KIENTA

 useefekt od edycji.. nie dziala

     const [data, setData] = useState([])
     useEffect(async () => {
         let result = await fetch(`http://localhost:3001/client/${clientID}`);
         result= await result.json();
         setData(result)
     })










     ************************************************************************
       **************************************************************************
       ************* edit client vie zeby formularz byl z danymi do edycji
       ************************************************************************

import React, {useEffect, useState} from 'react';
import styles from '../components/AddClient/AddClient.module.css';
import {Spinner} from '../components/spinner/Spinner';
import {useNavigate, useParams} from 'react-router-dom';


export const EditClientView = () => {
  const { clientID } = useParams();
  const params = useParams();
  // console.log(clientInfo);
  // console.log(clientID);

  const [name, setName] = useState('')
  const [mail, setMail] = useState<string>('')
  const [nextContactAt, setNextContactAt] = useState<string>('')
  const [notes, setNotes] = useState<string>('')


  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate()
  // console.log(form);

  useEffect(() => {
      getDetails()
  }, [])

  const getDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:3001/client/${clientID}`);
    result = await result.json();
    console.log(result);
    console.log(result.name);
  }

  // const updateForm = async (key: string, value: any) => {
  //     let result = await fetch(`http://localhost:3001/client/${clientID}`);
  //     result = await result.json()
  //     console.log(result);
  //
  //     setForm((form) => ({
  //     ...form,
  //     [key]: value,
  //   }));
  // };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const res = await fetch(`http://localhost:3001/client/${clientID}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(form),
  //   });
  //   const data: ClientEntity = await res.json(); //pobierz z cliententity i wypisz
  //   setLoading(false);
  //   setResultInfo(`Client ${data.name} updated`);
  // };
  // navigate(`/updated`)

  if (loading) {
    return <Spinner />;
  }
    return (
    <>
      {/*<form className={styles.form} onSubmit={handleSubmit}>*/}
      <form className={styles.form}>
        <h2>Edit client's /jego name / data</h2>
        <p>
          <label>
            Name: <br />
            <input
              type="text"
              placeholder="insert your name..."
              value={name}
              onChange={(e) => setName( e.target.value)}
              // zaktualizuj pole name o wartosc e.target.value
            />
          </label>
        </p>
        <p>
          <label>
            E-mail: <br />
            <input
              type="email"
              placeholder="enter valid @..."
              value={mail}
              onChange={(e) => setMail( e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Next contact at: <br />
            <input
              placeholder="i can't wait for you..."
              value={nextContactAt}
              onChange={(e) => setNextContactAt( e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Notes: <br />
            <textarea
              placeholder="notes..."
              value={notes}
              onChange={(e) => setName( e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Save changes</button>
      </form>
    </>
  );
};
