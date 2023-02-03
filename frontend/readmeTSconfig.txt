
******************************************************************
konfiguracja typescript do projektów.
******************************************************************



1. modyfikacja tsconfig.json
****************************

{
 dodaj tą linie ==>   "extends": "./tsconfig.paths.json",  <=====  *******************
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}

2. Dodaj plik tsconfig.paths.json z zawartością :
*************************************************

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "types": ["../backend/types"]     <==== sciezka do backendu w projekcie relatywna
    }
  }
}

3. doinstaluj odpowiednie moduły
********************************

    npm i -D customize-cra react-app-rewire-alias
    <== dołączanie sciezek z backendu??

4. Dodaj plik config-overrides.js
*********************************

const { override } = require("customize-cra");
const { aliasDangerous, configPaths } = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};
    <== aplikacja sciezek z tsconfig.paths.json do webpacka

5. Zmieniamy skrypty w package.json
***********************************

  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },

  6. NAJWAZNIEJSZE RESET !! typescripta w webstormie, skryptu startowego
    (u mnie dwa razy to minimum, żeby załapał) może całego Edytora
    **********************************************************************

    DZIAŁA kiedy importuje rzeczy z katalogu types z backendu!!
    inaczej albo zła ściezka do backendu albo niedoinstalowane moduły...

    ***************************************
    OPROCZ TEGO NA BACKENDIE, JAK MASZ HBSy TO ZMIEN RENDERY NA JSONY

    dodaj obsluge CORS w backendzie
    npm i cors
    npm i -D @types/cors
    ustaw import na:

import * as cors from 'cors';
    app.use(
        cors({
            origin: 'http://localhost:3000',    <=== tak bylo
            methods: ['POST', 'PUT', 'GET', 'DELETE'],  <== dodane do autoryzacji itp.
            credentials: true,
        })
    );

    //t5d1

    //
    // export const App = () => {
    //   return (
    //       <>
    //           <Navbar/>
    //           <Routes>
    //               <Route path="/client" element={<ClientView/>}/>
    //           </Routes>
    //           <Footer/>
    //             <DarkMode/>
    //       </>
    //   );
    // }
