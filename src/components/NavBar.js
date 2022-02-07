import React from 'react';
import { DropdownButton, Dropdown, Navbar, Container  } from "react-bootstrap";
//import { GiHamburguerMenu } from "react-icons/gi";

export const NavBar = () => {
  return (
    <>
        <Navbar className='navbar' variant="">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#home">
          <DropdownButton  className='dropButton' variant="outline" size='lg' title="Servicios" >
                <Dropdown.Item href="#">Inflables</Dropdown.Item>
                <Dropdown.Item href="#">Plaza blanda</Dropdown.Item>
                <Dropdown.Item href="#">Juegos</Dropdown.Item>
            </DropdownButton>
          </Navbar.Brand>
          <Navbar.Brand href="#home" className='prueba'> Combos </Navbar.Brand>
          <Navbar.Brand href="#home" className='prueba'> Contacto </Navbar.Brand>
          
        </Container>
      </Navbar>
      

    </>
    )
};

/*
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
    */