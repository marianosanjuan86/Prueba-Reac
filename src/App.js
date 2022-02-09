import React from 'react';
import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import './styles/styles.css';
import { Titulo } from './components/Titulo';
import { ImagesGalery } from './components/ImagesGalery';


export const App = () => {
  return (
    <>
      < TopBar />
      < NavBar />
      < Titulo />
      <ImagesGalery />


    </>
    )
};

export default App