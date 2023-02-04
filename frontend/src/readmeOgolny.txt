  // console.log(data);
           /* pokazuje pobrane dane z BE patrz na klucz w tablicy!!
           i uzywaj w useState()



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