import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';


function Footer_end() {
  return (
    <>
      <style type="text/css">
        {`
    .bottom {
        margin-bottom:0;
    }

    `}
      </style>

      <Container className="bg-dark jumbotron bottom">
        {/* <Row className="justify-content-md-center" style={{ color: "white" }} >
          <Col xs lg="2">
            1 of 3
            </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
            </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
            </Col>
        </Row> */}
        <div class="card text-center">
          <div class="card-header">
            Giới Thiệu
          </div>
          <div class="card-body">
            <h5 class="card-title">Kênh thông tin bất động sản</h5>
            <p class="card-text">Nơi bạn có thể đăng tin hoặc tìm kiếm tin</p>
           
          </div>
          <div class="card-footer text-muted">
            
        </div>
        </div>
      </Container>

    </>
  );
}

export default Footer_end;
