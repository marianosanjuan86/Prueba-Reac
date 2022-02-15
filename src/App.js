import React from 'react';
import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import './styles/styles.css';
import { Titulo } from './components/Titulo';
import { ImagesGalery } from './components/ImagesGalery';
import { QuienesSomos } from './components/QuienesSomos';
import FloatingWhatsApp from 'react-floating-whatsapp'


export const App = () => {
  return (
    <>
      < TopBar />
      < NavBar />
      < Titulo />
      {/* <ImagesGalery /> */}
      <QuienesSomos />
      <FloatingWhatsApp 
        phoneNumber={"+5401144485829"} 
        accountName={"Los Pelones"}
        statusMessage={"Trabajando en tu diversion"}
        chatMessage= {"Hola como estas?? \ Dejanos tu consulta"} />
      


    </>
    )
};

export default App