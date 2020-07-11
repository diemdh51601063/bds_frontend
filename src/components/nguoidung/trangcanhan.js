import React from "react";
import { Row } from "react-bootstrap";

function TrangCaNhanComponent(){
    return(
        <Row className="justify-content-md-center">
            <Col md={4}>
                <p>Trang cá nhân</p>
            </Col>

            <Col md={8}>
            <p>Quản lý tin đăng</p>
            </Col>
        </Row>

    );
}
export default TrangCaNhanComponent;