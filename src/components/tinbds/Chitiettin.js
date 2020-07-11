import React from 'react';
import { Card, Container, Row, Carousel, Button, Col, Table } from 'react-bootstrap';
function Chitiettin() {
    return (
        <Container className="clearfix justify-content-center ">
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
                            <img width="100%" height="100%" src="https://www.thuocdantoc.org/wp-content/uploads/2019/05/cay-hoa-hoe.jpg" />
                        </div>
                        <div>
                            <Row>

                                <Col md={6}>
                                    <Table className="table table-bordered mt-2">
                                        <tbody>
                                            <tr >
                                                <td width="40%"><b>Địa Chỉ:</b></td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr >
                                                <td><b>Hình Thức:</b></td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td><b>Danh Mục:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Chiều Dài:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Chiều Rộng:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Diện Tích:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Diện Tích Sử Dụng:</b></td>
                                                <td>Thornton</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </Col>

                                <Col md={6} className="">
                                    <Table className="table table-bordered mt-2">
                                        <tbody>
                                            <tr>
                                                <td width="40%"><b>Giá:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr >
                                                <td><b>Hướng:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Số Tầng:</b></td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <td><b>Số Phòng Ngủ:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Số Phòng WC:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td><b>Pháp Lý:</b></td>
                                                <td>Thornton</td>
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
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td width="25%"><b>Email:</b></td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td width="25%"><b>SĐT:</b></td>
                                                <td>Thornton</td>
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

                <span>Laboris eiusmod consequat nulla aliqua excepteur. Irure anim ea velit ipsum elit ipsum sint reprehenderit.
                Aliquip tempor ut mollit tempor id amet nulla qui fugiat eu dolor culpa ad consectetur.
                     Et velit esse ullamco qui magna nostrud enim fugiat in veniam duis.</span>
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
                    <Carousel.Item>
                        <img width="100%" height="100%"

                            className="d-block w-100"
                            src='https://nhadat24h.net/Upload/User/DangTin/2020/Images/282635/5b321f6c-7e6b-4bdf-8c95-4cb1ec858c8a.jpg'
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>

                        <img width="100%" height="100%"

                            className="d-block w-100"
                            src='https://nhadat24h.net/Upload/User/DangTin/2020/Images/282635/5b321f6c-7e6b-4bdf-8c95-4cb1ec858c8a.jpg'
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width="100%" height="100%"

                            className="d-block w-100"
                            src='https://nhadat24h.net/Upload/User/DangTin/2020/Images/282635/5b321f6c-7e6b-4bdf-8c95-4cb1ec858c8a.jpg'
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width="100%" height="100%"

                            className="d-block w-100"
                            src='https://nhadat24h.net/Upload/User/DangTin/2020/Images/282635/5b321f6c-7e6b-4bdf-8c95-4cb1ec858c8a.jpg'
                            alt=""
                        />
                    </Carousel.Item>


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
        </Container>

    );
}

export default Chitiettin;