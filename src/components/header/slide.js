import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './banner.jpg';
import { Row, Col } from 'react-bootstrap';
function Slide() {
  return (
    <div className="bg-light">
      <Row>
        <Col md={12}>

          <Carousel>
            <Carousel.Item>
            <div className="ml-5 mr-5">
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src='https://bdsdreamland.net/wp-content/uploads/2018/11/slider-2-1200x543.png'
                alt=""
              />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ml-5 mr-5">
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src="https://i.thoibaokinhdoanh.vn/2020/04/14/14-4-ban-hang-online-1586853964.jpg"
                alt=""
              />
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="ml-5 mr-5">
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src="https://gadvn.com/wp-content/uploads/2018/12/marketing-trong-bat-dong-san-1.jpg"
                alt=""
              />
              </div>

              <Carousel.Caption>
                <h3>Third slide label</h3>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className="ml-5 mr-5">
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src="https://mdland.com.vn/upload/images/LGJ/slide-le-grand-jadin.jpg"
                alt=""
              />
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>


      </Row>
    </div>
  );
}

export default Slide;
