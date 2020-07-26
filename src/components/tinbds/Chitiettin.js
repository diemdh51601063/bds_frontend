import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Carousel, Button, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { xemchitietBds, xemchitietHinhBds } from '../../services/tinBds.service';
import { BACKEND_URL } from '../../services/http.service';
function Chitiettin() {
    const { idtin } = useParams();
    const [chitietTinBds, setchitietTinBds] = useState(null);
    console.log(idtin);
    async function laychitietTinBds() {
        const data = await xemchitietBds(idtin);
        setchitietTinBds(data);
    }

    const [chitietHinhTinBds, setchitietHinhTinBds] = useState(null);
    async function laychitietHinhTinBds() {
        const hinhanh = await xemchitietHinhBds(idtin);
        setchitietHinhTinBds(hinhanh);
    }

    useEffect(
        () => {
            laychitietTinBds()
        }, []
    );

    useEffect(
        () => {
            laychitietHinhTinBds()
        }, []
    );
    return (
        <Container>
            {
                chitietTinBds == null && <h1>Loadinggggggggg</h1>
            }
            {
                chitietTinBds != null && <>
                    <hr></hr>
                    <div>
                        <h4>Thông Tin</h4>
                    </div>
                    <Row>
                        <Col md={12}>
                            <div className="border border-light p-2 ">

                                <div className="mt-2">
                                    <h4>Thông Tin</h4>
                                </div>
                                <div className="d-flex align-items-end justify-content-center">
                                    <img width="100%" height="100%" src={`${BACKEND_URL}/img/tinbds/${chitietTinBds.hinhdaidien}`} />
                                </div>
                                <div>
                                    <Row>

                                        <Col md={6}>
                                            <Table className="table table-bordered mt-2">
                                                <tbody>
                                                    <tr >
                                                        <td width="40%"><b>Địa Chỉ:</b></td>
                                                        <td>{chitietTinBds.diachi}</td>
                                                    </tr>
                                                    <tr >
                                                        <td><b>Hình Thức:</b></td>
                                                        <td>{chitietTinBds.hinhthuc.tenhinhthuc}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Danh Mục:</b></td>
                                                        <td>{chitietTinBds.danhmucbds.tendanhmuc}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Chiều Dài:</b></td>
                                                        <td>{chitietTinBds.chieudai} m</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Chiều Rộng:</b></td>
                                                        <td>{chitietTinBds.chieurong} m</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Diện Tích:</b></td>
                                                        <td>{chitietTinBds.dientich} m²</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Diện Tích Sử Dụng:</b></td>
                                                        <td>{chitietTinBds.dientichsudung} m²</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Col>

                                        <Col md={6} className="">
                                            <Table className="table table-bordered mt-2">
                                                <tbody>
                                                    <tr>
                                                        <td width="40%"><b>Giá:</b></td>
                                                        <td>{chitietTinBds.giaca} {chitietTinBds.donvitinh}</td>
                                                    </tr>
                                                    <tr >
                                                        <td><b>Hướng:</b></td>
                                                        <td>{chitietTinBds.huong.tenhuong}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Số Tầng:</b></td>
                                                        <td>{chitietTinBds.sotang} tầng</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Số Phòng Ngủ:</b></td>
                                                        <td>{chitietTinBds.sophongngu} phòng</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Số Phòng WC:</b></td>
                                                        <td>{chitietTinBds.sophongwc} phòng</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Pháp Lý:</b></td>
                                                        <td>{chitietTinBds.phaply}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <h4><b>Tiện Ích Xung Quanh</b></h4>
                                            </div>
                                            <Table className="table table-bordered mt-2">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%"><b>Các Tiện Ích:</b></td>
                                                        <td>Thornton</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Col>

                                        <Col md={6}>
                                            <div>
                                                <h4><b>Liên Hệ</b></h4>
                                            </div>
                                            <Table className="table table-bordered mt-2">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%"><b>Họ Tên:</b></td>
                                                        <td>{chitietTinBds.khachhang.hoten}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%"><b>Email:</b></td>
                                                        <td>{chitietTinBds.khachhang.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%"><b>SĐT:</b></td>
                                                        <td>{chitietTinBds.khachhang.sdt}</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="border border-light p-2 mt-2">
                        <h4><b>Thông Tin Mô Tả:</b></h4>

                        <span>{chitietTinBds.mota}</span>
                    </div>


                    <hr></hr>


                    <div className="border border-light p-2 mt-2">
                        <h4><b>Hình ảnh bất động sản</b></h4><hr></hr>
                        <Row className="ml-2">
                            <Button variant="outline-primary">Hình Ảnh</Button>

                            <Button variant="outline-success">360</Button>

                        </Row>
                        <hr></hr>
                        <Carousel>
                            {
                                chitietHinhTinBds == null && <h1>Loadinggggggggg</h1>
                            }
                            {
                                chitietHinhTinBds != null && chitietHinhTinBds.map(timKiem => {
                                    return (
                                        <Carousel.Item>
                                            <img width="100%" height="80%"

                                                className="d-block w-100"
                                                src={`${BACKEND_URL}/img/tinbds/${timKiem.link}`}
                                                alt=""
                                            />
                                        </Carousel.Item>
                                    )
                                }
                                )}
                        </Carousel>
                    </div>
                    <hr></hr>
                    <div className="border border-light p-2 mt-2 mb-5">
                        <h4><b>Các Tin Bất Động Sản Liên Quan</b></h4>
                        <hr></hr>
                        <div className="border border-light p-2 mt-2">
                            <h5 className="text-danger">Tiêu đề tin</h5>
                            <Row>
                                <Col md={3}>
                                    <img width="100%" height="100%" src="https://www.thuocdantoc.org/wp-content/uploads/2019/05/cay-hoa-hoe.jpg"></img>
                                </Col>
                                <Col md={9}>
                                    <div>
                                        Nostrud cupidatat eu et non ullamco qui culpa adipisicing velit pariatur cupidatat laborum culpa dolore.
                                        Proident quis pariatur aute labore dolore aliqua veniam.
                                        Officia ea non in tempor laborum nulla ad eu esse.
                                        Ex non aute deserunt adipisicing irure reprehenderit anim commodo minim est velit exercitation.
                            </div>
                                    <div className="d-flex flex-row justify-content-between mt-2">
                                        <div>
                                            <div>
                                                Giá: <span className="text-primary">1.5 tỷ</span>
                                            </div>
                                            <div>
                                                Giá: <span className="text-primary">1.5 tỷ</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                Giá: <span className="text-primary">1.5 tỷ</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>
            }
        </Container>

    );
}

export default Chitiettin;