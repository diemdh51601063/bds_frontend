import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Menu() {

        {/* dang nhap */}
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        {/* dang ky */}
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
                                                <Nav.Link className="text-white" onClick={handleShow}>ĐĂNG NHẬP</Nav.Link>
                                                <Nav.Link className="text-white" onClick={handleShow2}>ĐĂNG KÍ</Nav.Link>
                                                <Nav.Link >
                                                        <Button variant="outline-danger"><Link className="text-white" to="/dangtin">ĐĂNG TIN</Link></Button>
                                                </Nav.Link>
                                                <Nav.Link >
                                                        <Button variant="outline-success"><Link className="text-white" to="/timkiem">Tìm kiếm</Link>
                                                        </Button>
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
                                        </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                                        <Button variant="primary" onClick={handleClose}>Đăng Nhập</Button>
                                </Modal.Footer>
                        </Modal>

                        {/* dang ky */}
                        <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                        <Modal.Title>ĐĂNG KÝ</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <Form>
                                                <Form.Label className="mt-3">Họ Tên:</Form.Label>
                                                <Form.Control type="text" placeholder="Họ tên" name="hoten" />
                                                <Form.Label className="mt-3">Địa Chỉ :</Form.Label>
                                                <Form.Control type="text" placeholder="Địa chỉ" name="diachi" />
                                                <Form.Label className="mt-3">Số CMND :</Form.Label>
                                                <Form.Control type="number" placeholder="Số CMND" name="socmnd" />
                                                <Form.Label className="mt-3">Email :</Form.Label>
                                                <Form.Control type="email" placeholder="Email" name="emaildangky" />
                                                <Form.Label className="mt-3">Số Điện Thoại :</Form.Label>
                                                <Form.Control type="number" placeholder="Số điện thoại" name="sdt" />
                                                <Form.Label className="mt-3">Mật khẩu :</Form.Label>
                                                <Form.Control type="text" placeholder="Mật khẩu" name="matkhaudangky" />
                                                <Form.Label className="mt-3">Nhập lại mật khẩu :</Form.Label>
                                                <Form.Control type="text" placeholder="Nhập lại mật khẩu" name="nhaplaimatkhau" />

                                        </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose2}>Đóng</Button>
                                        <Button variant="primary" onClick={handleClose2}>Đăng Ký</Button>
                                </Modal.Footer>
                        </Modal>
                </>
        );
}


export default Menu;