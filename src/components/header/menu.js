import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signIn, decodeToken, signOut, signUp } from '../../services/khachhang.service';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'jsonwebtoken';

function Menu({ location, history: historyProp }) {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const khachhang = useSelector(state => state.khachhang.khachhang);
    const dispatch = useDispatch();

    async function dangnhap(data) {
        console.log(data);
        const token = await signIn(data);
        localStorage.setItem('token', token);
        dispatch({
            type: 'LOGIN_KHACHHANG',
            khachhang: decodeToken(),
        });
        alert("Đăng nhập thành công!!!");
        history.push('/');
        setShow(false);
    };

    async function dangxuat() {
        signOut();
        history.push('/');
    }

    async function dangky(data) {
        console.log(data);
        if ((data.password!="")&&(data.confirmpassword!="")&&(data.password == data.confirmpassword)) {
            const token = await signUp(data);
            localStorage.setItem('token', token);
            alert("Đăng kí thành công!!!");
            history.push('/');
            setShow2(false);
        }
        else {
            alert("Mật khẩu không trùng khớp! Vui lòng nhập lai");
        }
    }

    {/* dang nhap */ }
    const [showDangnhap, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    {/* dang ky */ }
    const [showDangky, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    useEffect(() => {
        console.log(khachhang);
    }, [khachhang]);

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

                        {
                            decodeToken() !== null && <>
                                <Nav.Link> <Link className="text-white" to="/trangcanhan">TRANG CÁ NHÂN</Link></Nav.Link>

                                <Nav.Link> <Link className="text-white" onClick={dangxuat} >ĐĂNG XUẤT</Link></Nav.Link>
                            </>
                        }

                        {
                            decodeToken() === null && <>
                                <Nav.Link className="text-white" onClick={handleShow}>ĐĂNG NHẬP</Nav.Link>
                                <Nav.Link className="text-white" onClick={handleShow2}>ĐĂNG KÍ</Nav.Link>
                            </>
                        }
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
            <Modal show={showDangnhap} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ĐĂNG NHẬP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(dangnhap)}>
                        <Form.Label className="mt-3">Email đăng nhập:</Form.Label>
                        <Form.Control type="text" ref={register} placeholder="Email" name="email" />
                        <Form.Label className="mt-3">Mật khẩu đăng nhập :</Form.Label>
                        <Form.Control type="password" ref={register} placeholder="Mật khẩu" name="password" />
                        <Row className="mt-3 ml-1">
                            <Button variant="black" onClick={handleClose}>Đóng</Button>
                            <Button type="submit" variant="danger">Đăng Nhập</Button>
                        </Row>

                    </Form>
                </Modal.Body>
            </Modal>

            {/* dang ky */}
            <Modal show={showDangky} onHide={handleClose2} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>ĐĂNG KÝ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(dangky)}>
                        <Row>
                            <Col md={6}>
                                <Form.Label className="mt-3">Họ Tên:</Form.Label>
                                <Form.Control type="text" ref={register} placeholder="Họ tên" name="hoten" />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Email :</Form.Label>
                                <Form.Control type="email" ref={register} placeholder="Email" name="email" />
                            </Col>
                        </Row>
                        <Form.Label className="mt-3">Địa Chỉ :</Form.Label>
                        <Form.Control type="text" ref={register} placeholder="Địa chỉ" name="diachi" />

                        <Row>
                            <Col md={6}>
                                <Form.Label className="mt-3">Số Điện Thoại :</Form.Label>
                                <Form.Control type="number" ref={register} placeholder="Số điện thoại" name="sdt" />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Số CMND :</Form.Label>
                                <Form.Control type="number" ref={register} placeholder="Số CMND" name="socmnd" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Label className="mt-3">Mật khẩu :</Form.Label>
                                <Form.Control type="password" ref={register} placeholder="Mật khẩu" name="password" />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Nhập lại mật khẩu :</Form.Label>
                                <Form.Control type="password" ref={register} placeholder="Nhập lại mật khẩu" name="confirmpassword" />
                            </Col>
                        </Row>
                        <Row className="mt-3 ml-1">
                            <Button variant="black" onClick={handleClose2}>Đóng</Button>
                            <Button variant="info" type="submit">Đăng Kí</Button>
                        </Row>

                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}


export default withRouter(Menu);