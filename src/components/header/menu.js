import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Menu() {

        {/* dang nhap */ }
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        {/* dang ky */ }
        const [show2, setShow2] = useState(false);
        const handleShow2 = () => setShow2(true);
        const handleClose2 = () => setShow2(false);
        return (
                <>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                        <Nav className="d-flex align-items-center">
                                                <NavDropdown title="MUA" id="collasible-nav-dropdown">
                                                        <Link className="text-black" to="/danhsach">Danh sách tin</Link>
                                                        <NavDropdown.Item href="#action/3.1">Căn Hộ</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Nhà</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Đất Nền</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.4">Mặt Bằng</NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown title="THUÊ" id="collasible-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Căn Hộ</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Nhà</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Đất Nền</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.4">Mặt Bằng</NavDropdown.Item>
                                                </NavDropdown>
                                                <Nav.Link href="#home">TOUR 360°</Nav.Link>
                                                <Nav.Link href="#features">BẢN ĐỒ</Nav.Link>
                                                <Nav.Link href="#pricing">TIN TỨC</Nav.Link>
                                                <Nav.Link> <Link className="text-white" to="/trangcanhan">TRANG CÁ NHÂN</Link></Nav.Link>
                                                <Nav.Link className="text-white" onClick={handleShow}>ĐĂNG NHẬP</Nav.Link>
                                                <Nav.Link className="text-white" onClick={handleShow2}>ĐĂNG KÍ</Nav.Link>
                                                <Nav.Link >
                                                        <Link to="/dangtin"><Button variant="danger"><b>ĐĂNG TIN</b></Button></Link>
                                                </Nav.Link>
                                                <Nav.Link >
                                                        <Link to="/timkiem"><Button variant="success"><b>Tìm kiếm</b></Button></Link>
                                                </Nav.Link>
                                        </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                        {/* dang nhap */}
                        <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                        <Modal.Title>ĐĂNG NHẬP</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <Form>
                                                <Form.Label className="mt-3">Email đăng nhập:</Form.Label>
                                                <Form.Control type="text" placeholder="Email" name="email" />
                                                <Form.Label className="mt-3">Mật khẩu đăng nhập :</Form.Label>
                                                <Form.Control type="text" placeholder="Mật khẩu" name="matkhau" />
                                                <Row className="mt-3 ml-1">
                                                        <Button variant="black" onClick={handleClose}>Đóng</Button>
                                                        <Button variant="danger" onClick={handleClose}>Đăng Nhập</Button>
                                                </Row>

                                        </Form>
                                </Modal.Body>
                        </Modal>

                        {/* dang ky */}
                        <Modal show={show2} onHide={handleClose2} size="lg">
                                <Modal.Header closeButton>
                                        <Modal.Title>ĐĂNG KÝ</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <Form>
                                                <Row>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Họ Tên:</Form.Label>
                                                                <Form.Control type="text" placeholder="Họ tên" name="hoten" />
                                                        </Col>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Email :</Form.Label>
                                                                <Form.Control type="email" placeholder="Email" name="emaildangky" />
                                                        </Col>
                                                </Row>
                                                <Form.Label className="mt-3">Địa Chỉ :</Form.Label>
                                                <Form.Control type="text" placeholder="Địa chỉ" name="diachi" />

                                                <Row>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Số Điện Thoại :</Form.Label>
                                                                <Form.Control type="number" placeholder="Số điện thoại" name="sdt" />
                                                        </Col>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Số CMND :</Form.Label>
                                                                <Form.Control type="number" placeholder="Số CMND" name="socmnd" />
                                                        </Col>
                                                </Row>
                                                <Row>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Mật khẩu :</Form.Label>
                                                                <Form.Control type="text" placeholder="Mật khẩu" name="matkhau" />
                                                        </Col>
                                                        <Col md={6}>
                                                                <Form.Label className="mt-3">Nhập lại mật khẩu :</Form.Label>
                                                                <Form.Control type="text" placeholder="Nhập lại mật khẩu" name="nhaplaimatkhau" />
                                                        </Col>
                                                </Row>
                                                <Row className="mt-3 ml-1">
                                                        <Button variant="black" onClick={handleClose}>Đóng</Button>
                                                        <Button variant="info" onClick={handleClose}>Đăng Kí</Button>
                                                </Row>

                                        </Form>
                                </Modal.Body>

                        </Modal>
                </>
        );
}


export default Menu;