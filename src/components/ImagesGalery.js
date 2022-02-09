import React from 'react';
import { Card, CardGroup  } from "react-bootstrap";
import galeria1 from "../Images/galeria1.jpg";
import galeria2 from "../Images/galeria2.jpg";
import galeria3 from "../Images/galeria3.jpg";
import galeria4 from "../Images/galeria4.jpg";
import galeria5 from "../Images/galeria5.jpg";

export const ImagesGalery = () => {
  return (
    <>
        <CardGroup >
            <Card className='cardGalery' border="dark" >
                <Card.Img className='imagesGalery' src={galeria1}></Card.Img>
            </Card>
            <Card className='cardGalery' border="dark" >
                <Card.Img className='imagesGalery' src={galeria2}></Card.Img>
            </Card>
            <Card className='cardGalery' border="dark" >
                <Card.Img className='imagesGalery' src={galeria3}></Card.Img>
            </Card>
            <Card className='cardGalery' border="dark" >
                <Card.Img className='imagesGalery' src={galeria4}></Card.Img>
            </Card>
            <Card className='cardGalery' border="dark" >
                <Card.Img className='imagesGalery' src={galeria5}></Card.Img>
            </Card>
        </CardGroup>
    </>
  );
};

/*<div className='galery' >  
            <span className='images-galery'>
                <img
                alt=""
                src={ galeria1 }
                width="150"
                height="150"
                className="d-inline-block align-top"
                />
            </span>

            <span className='images-galery'>
                <img
                alt=""
                src={ galeria2 }
                width="150"
                height="150"
                className="d-inline-block align-top"
                />
            </span>

            <span className='images-galery'>
                <img
                alt=""
                src={ galeria3 }
                width="150"
                height="150"
                className="d-inline-block align-top"
                />
            </span>

            <span className='images-galery'>
                <img
                alt=""
                src={ galeria4 }
                width="150"
                height="150"
                className="d-inline-block align-top"
                />
            </span>

            <span className='images-galery'>
                <img
                alt=""
                src={ galeria5 }
                width="150"
                height="150"
                className="d-inline-block align-top"
                />
            </span>
        </div>*/
