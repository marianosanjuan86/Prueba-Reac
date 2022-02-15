import React from 'react';
import { ImagesGalery } from './ImagesGalery';
import { Container, Row  } from "react-bootstrap";

export const Titulo = () => {

  return (
  <>
        <Container className="titulo" >
          <Row>
            <h1> LOS PELONES </h1>
            <h3> Llevamos la diversion a tu fiesta!!!</h3>
            <ImagesGalery/>
          </Row>  
        </Container>

  </>
  )
};
