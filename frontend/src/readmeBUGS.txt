 ODSWIEZENIE STRONY PO DODANIU KIENTA*******************************************

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