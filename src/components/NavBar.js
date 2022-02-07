import React from 'react';
import { DropdownButton, Dropdown } from "react-bootstrap";
//import { GiHamburguerMenu } from "react-icons/gi";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center style-navbar" >       
            <DropdownButton  className='dropButton' variant="outline" size='lg' title="Servicios" >
                <Dropdown.Item href="#">Inflables</Dropdown.Item>
                <Dropdown.Item href="#">Plaza blanda</Dropdown.Item>
                <Dropdown.Item href="#">Juegos</Dropdown.Item>
            </DropdownButton>        
            <button variant="outline" size='lg'> Combos </button>
            <button variant="outline" size='lg'> Contacto </button>
        </div>
    </nav>

    </>
    )
};
