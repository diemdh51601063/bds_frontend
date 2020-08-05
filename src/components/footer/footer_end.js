import React from 'react';

import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';


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

      <div className="bg-dark jumbotron bottom">
        <h2 className="textCheckbox">BẤT ĐỘNG SẢN 247</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Header style={{fontWeight:'bold', fontSize:'20px', color:'darkgreen',textAlign:'center'}}>GIỚI THIỆU</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Địa chỉ: 140 Cao Lỗ, phường 4, quận 8</ListGroup.Item>
                <ListGroup.Item>SĐT:0123456789</ListGroup.Item>
                <ListGroup.Item>Email:diem@gmail.com
                  tien@gmail.com</ListGroup.Item>                
              </ListGroup>
            </Card>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
            <div class="card-body text-white">
              <h5 class="card-title">Kênh thông tin bất động sản</h5>
              <p class="card-text">Nơi bạn có thể đăng tin hoặc tìm kiếm tin</p>

            </div>
            <div class="card-footer text-muted">

            </div>

          </Col>
        </Row>
      </div>

    </>
  );
}

export default Footer_end;
