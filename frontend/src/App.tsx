import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {ClientView} from "./views/ClientView";



export const App = () => {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/client" element={<ClientView/>}/>
          </Routes>
          <Footer/>
      </>
  );
}

