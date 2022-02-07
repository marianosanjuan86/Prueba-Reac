import React from 'react';
import whatsapp from "../Images/whatsapp.png";
import instagram from "../Images/instagram.png";
import { Navbar, Container } from "react-bootstrap";

export const TopBar = () => {
  return (
    <>
      <Navbar className='topbar' variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ whatsapp }
              width="30"
              height="24"
              className="d-inline-block align-top"
              />{' '}
              11-5739-7625 / 11-4448-5829
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ instagram }
              width="30"
              height="24"
              className="d-inline-block align-top"
              />{' '}
              @lospelonesok
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>

  )
};


