import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {ClientView} from "./views/ClientView";
import {ClientList} from "./components/Client/ClientList";


//
// export const App = () => {
//   return (
//       <>
//           <Navbar/>
//           <Routes>
//               <Route path="/client" element={<ClientView/>}/>
//           </Routes>
//           <Footer/>
//       </>
//   );
// }

export const App = () => {
    return (
        < div className="App">
            <ClientList/>
        </div>
    )
}