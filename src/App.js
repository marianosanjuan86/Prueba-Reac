import React from 'react';
import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import './styles/styles.css';
import { Titulo } from './components/Titulo';
import { ImagesGalery } from './components/ImagesGalery';
import { QuienesSomos } from './components/QuienesSomos';


export const App = () => {
  return (
    <>
      < TopBar />
      < NavBar />
      < Titulo />
      <ImagesGalery />
      <QuienesSomos />
      


    </>
    )
};

export default App