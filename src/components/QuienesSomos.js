import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import video1 from "../videos/video1.mp4";

export const QuienesSomos = () => {
  return (
    <>  
      <Container>
        <Row className='quienesSomos'>
            
            <Col>leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin
            </Col>
            <Col>
                <video src={ video1 } preload="auto"  autoPlay muted loop width="570" height="240" ></video>
            </Col>
            
        </Row>
        

      </Container>

   

    </>
  );
};
