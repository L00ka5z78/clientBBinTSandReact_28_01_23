  // console.log(data);
           /* pokazuje pobrane dane z BE patrz na klucz w tablicy!!
           i uzywaj w useState()

***t5d5 18min

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,        //zwracamy poprzednia wartosc i modyfikujemy tylko to co w kluczu na ta wartosc
            [key]: value,
        }));
    }

     <input
                        type="text"
                        placeholder="insert gifts name..."
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                        // zaktualizuj pole name o wartosc e.target.value
                    />

     react router dom konfiguracja
     instalujemy paczke i owijamy app w indexie.ts:

     <React.StrictMode>
           <BrowserRouter>
               <App />
           </BrowserRouter>
       </React.StrictMode>

       koniec

        <>
               <ClientList/>
               <AddClient/>
               <Link to="/test">Switch to test</Link>   <-- przekierowuje do  sciezki test
           </>

             dopasowanie *  wyswietla notfound view jak wejdziemy pod sciezke ktorej nie ma
             <Route path="*" element={<NotFoundView/>}/>

Zamaist Link mozesz uzywac NavLink i teraz mozna uzyc artybuty style lub classList
otrzymasz w nich obiekt ktory ma wlasciwosc isActive.
przyklad


             <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'red'})}
             jezeli link isactive daj zielony kolor jak nie to czerwony

             ALBO DAJESZ DO ZMIENNEJ I UZYWASZ JEJ W NAVLINKU
     const colorOfLink = ({isActive}: {
            isActive: boolean;
        }) => ({color: isActive ? 'green' : 'red'})

       ******** PREKIEROWANIE PO KLIKU W ADRE EMAIL DO POCZTY
         <td><a href={'mailto:{email}'}> {props.client.mail}</a></td> WYGLADA JAK LINK!


       *******  ALBO funkcja
           const onEmailClick = () => {
                  window.open(`mailto:${props.client.mail}`);
             }
        ******     i w returnie

         <td onClick={onEmailClick}>{props.client.mail}</td>

         ZEBY nasz komponent sie wyswietlil to trzeba fetch dac w useEffect()

            useEffect(() => {       //przenisc do pliku i zrobic klase/funkcje do fetchowania
                (async () => {
                    const res = await fetch(`http://localhost:3001/client/${clientID}`);    <== zapytanie do backendu
                    setClientInfo(await res.json());
                    // const data = await res.json()
                    // console.log(data);
                })();
                // console.log(setClientInfo);

                // zrob obsluge bledow jak przy delete w tableRow najlepiej w osobnym pliku

            }, [])

//Link do strony z detalami klienta zrobic
// <Link to={`/client/${props.client.id}`}>
//     {props.client.name}
// </Link>
// <Data>E-mail:<a href={'mailto:{email}'}>{email}</a></Data>