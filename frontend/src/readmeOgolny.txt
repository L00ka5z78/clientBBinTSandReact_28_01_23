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