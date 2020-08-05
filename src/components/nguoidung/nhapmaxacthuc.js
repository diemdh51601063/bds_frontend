import React from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Button, Container, Col } from "react-bootstrap";
import { xacthucemail } from "../../services/khachhang.service";
import { useHistory } from "react-router";

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    async function xacthuc(data) {
        //console.log(data);
        const ketqua = await xacthucemail(data);
        console.log(ketqua);
        if (ketqua.data.success == false) {
            alert('Sai mã xác thực');
        }
        else {
            localStorage.setItem('token', ketqua.data.token);
            history.push('/dangtin');
        }
    }

    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col md="5">
                    <h3><b>NHẬP MÃ XÁC THỰC</b></h3>
                    <Form onSubmit={handleSubmit(xacthuc)}>
                        <Form.Label className="mt-3"><b>Mã xác thực gửi qua email:</b></Form.Label>
                        <Form.Control type="text" ref={register} placeholder="Mã xác thực" name="maxacthuc" />
                        <Row className="mt-3 ml-1">
                            <Button variant="black" >Đóng</Button>
                            <Button type="submit" variant="danger">Xác Thực</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}