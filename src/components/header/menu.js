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
import '../../assests/tintuc.css';
import _ from "lodash/fp";

function Menu({ location, history: historyProp }) {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

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
        //alert("Đăng nhập thành công!!!");
        history.push('/');
        setShow(false);
    };

    async function dangxuat() {
        signOut();
        history.push('/');
    }

    async function dangky(data) {
        console.log(data);
        if ((data.password != "") && (data.confirmpassword != "") && (data.password == data.confirmpassword)) {
            const token = await signUp(data);
            localStorage.setItem('token', token);
            alert("Đăng kí thành công!!!");
            history.push('/nhapmaxacnhan');
            setShow2(false);
            //setShow3(false);
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

    function dng() {
        if (decodeToken() === null) {
            alert('Bạn cần đăng nhập trước khi đăng tin !');
        }
    }
    const listDanhmuc = useSelector(state => state.danhmuc.listDanhmuc);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbarbg" >
                <h3 className="textCheckbox">BẤT ĐỘNG SẢN 247</h3>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end navbartext">
                    <Nav className="d-flex align-items-center">
                        <NavDropdown title="MUA" id="collasible-nav-dropdown">
                            <Link className="text-black" to="/danhsach">Danh sách tin</Link>
                            {
                                listDanhmuc.length !== 0 && listDanhmuc.map(danhmuc => {
                                    return (
                                        <NavDropdown.Item href="#action/3.1">{danhmuc.tendanhmuc}</NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                        <NavDropdown title="THUÊ" id="collasible-nav-dropdown">
                        <Link className="text-black" to="/danhsach">Danh sách tin</Link>
                            {
                                listDanhmuc.length !== 0 && listDanhmuc.map(danhmuc => {
                                    return (
                                        <NavDropdown.Item><Link className="text-black" to="/danhsach"> {danhmuc.tendanhmuc}</Link></NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>

                        <Nav.Link href="#pricing">TIN TỨC</Nav.Link>
                        {
                            decodeToken() !== null && <>
                                <Nav.Link > <Link className="text-dark" to="/trangcanhan"><b>TRANG CÁ NHÂN</b></Link></Nav.Link>

                                <Nav.Link> <Link className="text-dark" onClick={dangxuat} >ĐĂNG XUẤT</Link></Nav.Link>
                            </>
                        }

                        {
                            decodeToken() === null && <>
                                <Nav.Link onClick={handleShow}><b>ĐĂNG NHẬP</b></Nav.Link>
                                <Nav.Link onClick={handleShow2}><b>ĐĂNG KÍ</b></Nav.Link>
                            </>
                        }

                        <Nav.Link >
                            <Link to="/dangtin"><Button variant="danger" type="submit" onClick={dng}><b>ĐĂNG TIN</b></Button></Link>
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
                        <Form.Control type="email" ref={register({ required: true })} placeholder="Email" name="email" />
                        {errors.email && <span className="errorvalidate">Email không được bỏ trống<br></br></span>}
                        <Form.Label className="mt-3">Mật khẩu đăng nhập :</Form.Label>
                        <Form.Control type="password" ref={register({ required: true })} placeholder="Mật khẩu" name="password" />
                        {errors.password && <span className="errorvalidate">Mật khẩu không được bỏ trống<br></br></span>}
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
                                <Form.Control type="text" ref={register({ required: true })} placeholder="Họ tên" name="hoten" />
                                {_.get("hoten.type", errors) === "required" && (
                                    <p className="errorvalidate">Họ tên không được bỏ trống</p>
                                )}
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Email :</Form.Label>
                                <Form.Control type="email" ref={register({ required: true })} placeholder="Email" name="email" />
                                {_.get("email.type", errors) === "required" && (
                                    <p className="errorvalidate">Email không được bỏ trống</p>
                                )}
                            </Col>
                        </Row>
                        <Form.Label className="mt-3">Địa Chỉ :</Form.Label>
                        <Form.Control type="text" ref={register({ required: true })} placeholder="Địa chỉ" name="diachi" />
                        {_.get("diachi.type", errors) === "required" && (
                            <p className="errorvalidate">Địa chỉ không được bỏ trống</p>
                        )}

                        <Row>
                            <Col md={6}>
                                <Form.Label className="mt-3">Số Điện Thoại :</Form.Label>
                                <Form.Control type="number" ref={register({ required: true })} placeholder="Số điện thoại" name="sdt" />
                                {_.get("sdt.type", errors) === "required" && (
                                    <p className="errorvalidate">Số điện thoại không được bỏ trống</p>
                                )}
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Số CMND :</Form.Label>
                                <Form.Control type="number" ref={register({ required: true, maxLength: 12, minLength: 9 })} placeholder="Số CMND" name="socmnd" />
                                {_.get("socmnd.type", errors) === "required" && (
                                    <p className="errorvalidate">Số CMND không được bỏ trống</p>
                                )}
                                {_.get("socmnd.type", errors) === "maxLength" && (
                                    <p className="errorvalidate">Số CMND nhiều nhất 12 kí tự</p>
                                )}
                                {_.get("socmnd.type", errors) === "minLength" && (
                                    <p className="errorvalidate">Số CMND ít nhất 9 kí tự</p>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Label className="mt-3">Mật khẩu :</Form.Label>
                                <Form.Control type="password" ref={register({ required: true, minLength: 5 })} placeholder="Mật khẩu" name="password" />
                                {_.get("password.type", errors) === "required" && (
                                    <p className="errorvalidate">Mật khẩu không được bỏ trống</p>
                                )}
                                {_.get("password.type", errors) === "minLength" && (
                                    <p className="errorvalidate">Mật khẩu có ít nhất 5 kí tự</p>
                                )}
                            </Col>
                            <Col md={6}>
                                <Form.Label className="mt-3">Nhập lại mật khẩu :</Form.Label>
                                <Form.Control type="password" ref={register({ required: true, minLength: 5 })} placeholder="Nhập lại mật khẩu" name="confirmpassword" />
                                {_.get("confirmpassword.type", errors) === "required" && (
                                    <p className="errorvalidate">Mật khẩu không được bỏ trống</p>
                                )}
                                {_.get("confirmpassword.type", errors) === "minLength" && (
                                    <p className="errorvalidate">Mật khẩu có ít nhất 5 kí tự</p>
                                )}
                            </Col>
                        </Row>
                        <Row className="mt-3 ml-1">
                            <Button variant="black" onClick={handleClose2}>Đóng</Button>
                            <Button variant="info" type="submit" >Đăng Kí</Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default withRouter(Menu);