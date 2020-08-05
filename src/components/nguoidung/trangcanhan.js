import React, { useState } from "react";
import { Row, Col, Container, Button, Table, Modal, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { decodeToken } from "../../services/khachhang.service";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function TrangCaNhanComponent() {
    const listBds = useSelector(state => state.tinBds.listBds);
    const { register, handleSubmit } = useForm();

    const [quanlyThongtincanhan, setQlythongtincanhan] = useState(false);
    const handleClose2 = () => setQlythongtincanhan(false);
    const handleShow2 = () => setQlythongtincanhan(true);
    return (
        decodeToken() === null ?
            <Redirect to="/"></Redirect>
            :
            <>
                <div>
                    <Row className="ml-5 mr-5">
                        <Col md={3} >
                            <Container>
                            <div className="mt-3" >
                                <h4><b>THÔNG TIN CÁ NHÂN</b></h4>
                            </div>
                            <div className="border border-light p-2 mb-2">
                                <img className="ml-5 mr-5" width="60%" height="50%" src="http://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg"></img>
                                <Row>
                                    <Col md={3}>
                                        <div className="mt-2 text-drak">
                                            <b>Họ tên:</b>
                                        </div>
                                    </Col>

                                    <div className="mt-2 text-drak">
                                        <b>{decodeToken().username}</b>
                                    </div>

                                </Row>
                                <Row>

                                    <Col md={3}>
                                        <div className="mt-2 text-drak">
                                            <b>SĐT:</b>
                                        </div>
                                    </Col>

                                    <div className="mt-2 text-drak">
                                        <b>{decodeToken().sdt}</b>
                                    </div>

                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <div className="mt-2 text-drak">
                                            <b>Email:</b>
                                        </div>
                                    </Col>

                                    <div className="mt-2 text-drak">
                                        <b>{decodeToken().email}</b>
                                    </div>

                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <div className="mt-2 text-drak">
                                            <b>CMND:</b>
                                        </div>
                                    </Col>

                                    <div className="mt-2 text-drak">
                                        <b>{decodeToken().socmnd}</b>
                                    </div>

                                </Row>
                                <div>
                                    <Button className="ml-4 mr-3" variant="success" size="lg" type="submit" onClick={handleShow2}><b>Sửa Thông Tin Cá Nhân</b></Button>
                                </div>
                            </div>
                            </Container>
                        </Col>

                        <Col md={9}>
                            {/* quan ly danh sach tin bds */}
                            <div className="mt-3">
                                <h4><b>QUẢN LÝ DANH SÁCH TIN BẤT ĐỘNG SẢN</b></h4>
                            </div>
                            <div className="border border-light p-2 mb-2">
                                <h4><b>Các Tin Chưa Hết Hạn</b></h4>
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className="bg-info">
                                                <th width="10%">Mã Tin</th>
                                                <th width="50%">Tiêu Đề</th>
                                                <th width="10%">Ngày Bắt Đầu</th>
                                                <th width="10%">Ngày Hết Hạn</th>
                                                <th width="15%">Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                listBds.length !== 0 && listBds.map(tinBds => {
                                                    if (tinBds.khachhang.id == decodeToken().id_khachhang) {
                                                        if (tinBds.cttindichvu[0].hethan == 0)
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{tinBds.id}</td>
                                                                        <td>{tinBds.tieude}</td>
                                                                        <td>{tinBds.cttindichvu[0].ngaybatdau}</td>
                                                                        <td>{tinBds.cttindichvu[0].ngayketthuc}</td>
                                                                        <td>
                                                                            <Row>
                                                                                <Col md={5}>
                                                                                    <Button type="submit" variant="danger" size="sm">Ẩn</Button>
                                                                                </Col>
                                                                                <Col md={5}>
                                                                                    <Button type="submit" variant="info" size="sm">Sửa</Button>
                                                                                </Col>

                                                                            </Row>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                    }

                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                <h4><b>Các Tin Hết Hạn</b></h4>
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className="bg-dark text-white">
                                                <th width="10%">Mã Tin</th>
                                                <th width="50%">Tiêu Đề</th>
                                                <th width="10%">Ngày Hết Hạn</th>
                                                <th width="20%">Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                listBds.length !== 0 && listBds.map(tinBds => {
                                                    if (tinBds.khachhang.id == decodeToken().id_khachhang) {
                                                        if (tinBds.cttindichvu[0].hethan == 1)
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{tinBds.id}</td>
                                                                        <td>{tinBds.tieude}</td>
                                                                        <td>{tinBds.cttindichvu[0].ngayketthuc}</td>
                                                                        <td>
                                                                            <Row>
                                                                                <Col md={4}>
                                                                                    <Button type="submit" variant="danger" size="sm">Xóa</Button>
                                                                                </Col>
                                                                                <Col md={8}>
                                                                                    <Button type="submit" variant="dark" size="sm">Đăng lại</Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                    }

                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* thay doi thong tin ca nhan */}
                    <Modal show={quanlyThongtincanhan} onHide={handleClose2} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Quản lý Thông Tin Cá Nhân</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Label className="mt-3"><b>Họ Tên:</b></Form.Label>
                                        <Form.Control type="text" ref={register} placeholder="Họ tên" name="hoten" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="mt-3"><b>Email :</b></Form.Label>
                                        <Form.Control type="email" ref={register} placeholder="Email" name="emaildangky" />
                                    </Col>
                                </Row>
                                <Form.Label className="mt-3"><b>Địa Chỉ :</b></Form.Label>
                                <Form.Control type="text" ref={register} placeholder="Địa chỉ" name="diachi" />

                                <Row>
                                    <Col md={6}>
                                        <Form.Label className="mt-3"><b>Số Điện Thoại :</b></Form.Label>
                                        <Form.Control readOnly type="number" placeholder="Số điện thoại" name="sdt" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="mt-3"><b>Số CMND :</b></Form.Label>
                                        <Form.Control type="number" readOnly placeholder="Số CMND" name="socmnd" />
                                    </Col>
                                </Row>
                                <Row className="mt-3 ml-1">
                                    <Button variant="black" onClick={handleClose2}>Đóng</Button>
                                    <Button variant="danger" onClick={handleClose2}>Lưu Thay Đổi</Button>
                                </Row>
                            </Form>
                        </Modal.Body>
                    </Modal>

                </div>
            </>
    );
}
export default TrangCaNhanComponent;