import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './banner.jpg';
import { Row, Col } from 'react-bootstrap';
function Slide() {
  return (
    <>
      <Row>
        <Col md={12}>

          <Carousel>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src='http://cdn.batdongsan.vn/FileManager/Banner/Banner%20Home/tk-vip.jpg'
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="http://cdn.batdongsan.vn/FileManager/Banner/bds-office.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img

                className="d-block w-100"
                src="https://assets.muabannhadat.vn/mbnd/img/home-top.c250cf4d.jpg"
                alt="Third slide"
                style={{ height: "400px" }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        
      </Row>
    </>
  );
}

export default Slide;
