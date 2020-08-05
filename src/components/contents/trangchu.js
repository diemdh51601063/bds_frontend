import React, { useState } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import { BACKEND_URL } from '../../services/http.service';
import { Link } from 'react-router-dom';
import { getAllQuanHuyen } from '../../services/thanhpho.service';
function Trangchu() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const listBds = useSelector(state => state.tinBds.listBds);
    const listThanhpho = useSelector(state => state.thanhpho.listThanhpho);

    return (
        <div className="contentbg">
            <Container className="clearfix justify-content-center">

                <hr></hr>
                <hr></hr>
                <h3 style={{ fontWeight: 'bold' }}>Tin Bất Động Sản Nổi Bật</h3>
                <Row className="my-5">
                    <Col md={12}>
                        <Carousel responsive={responsive}>
                            {
                                listBds.length !== 0 && listBds.map(tinbds => {
                                    if (tinbds.tinhtrang == 1) {
                                        return (
                                            <div >
                                                <Col>
                                                    <Card style={{ height: '400px' }}>
                                                        <Card.Img height="200px" variant="top" src={`${BACKEND_URL}/img/tinbds/${tinbds.hinhdaidien}`} />
                                                        <Card.Body>
                                                            <Card.Title style={{ height: '100px', fontSize: '20px' }}><Link className="errorvalidate" to={`/chitiet/${tinbds.id}`}>{tinbds.tieude}</Link></Card.Title>
                                                            <Card.Text>
                                                                <Row style={{ color: 'green', fontWeight: 'bold' }}>
                                                                    <Col>Diện tích:{tinbds.dientich}m2</Col>
                                                                    <Col>Giá: {tinbds.giaca} {tinbds.donvitinh}</Col>
                                                                </Row>
                                                                <Row>
                                                                    {listThanhpho.length !== 0 && listThanhpho.map(thanhpho => {
                                                                        if (thanhpho.code == tinbds.tinh_thanhpho) {
                                                                            return (
                                                                                <Col>{thanhpho.name}</Col>
                                                                            )
                                                                        }
                                                                    })}
                                                                </Row>
                                                                <Row>
                                                                    <Col className="tieudechitiettin"> Liên hệ: {tinbds.khachhang.sdt}</Col>
                                                                </Row>
                                                            </Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </div>)
                                            }
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
                <hr></hr>

                <hr></hr>
                <h3 style={{ fontWeight: 'bold' }}>Tin Bất Động Sản Mới Nhất</h3>
                <Row>
                    {
                        listBds.length !== 0 && listBds.map(tinbds => {
                            if (tinbds.tinhtrang == 1) {
                                return (
                                    <Col md={3}>
                                        <div className="ml-1 mr-1 mt-2 mb-2" style={{ width: '16rem' }}>
                                            <Card>
                                                <Card.Img variant="top" height="150px" src={`${BACKEND_URL}/img/tinbds/${tinbds.hinhdaidien}`} />
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '15px', height: '70px' }}><Link to={`/chitiet/${tinbds.id}`}>{tinbds.tieude}</Link></Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>)
                            }
                        })
                    }
                </Row>
                <hr></hr>
                <hr></hr>
                <h3 style={{ fontWeight: 'bold' }}>Tin Có Mô Hình Thực Tế Ảo</h3>
                <Row>
                    {
                        listBds.length !== 0 && listBds.map(tinbds => {
                            if (tinbds.tinhtrang == 1 && tinbds.cttindichvu.length!==1 ) {
                                if(tinbds.cttindichvu[1].id_dichvu == 5)
                                {
                                    return (
                                        <Col md={3}>
                                            <div className="ml-1 mr-1 mt-2 mb-2" style={{ width: '16rem' }}>
                                                <Card>
                                                    <Card.Img variant="top" height="150px" src={`${BACKEND_URL}/img/tinbds/${tinbds.hinhdaidien}`} />
                                                    <Card.Body>
                                                        <Card.Title style={{ fontSize: '15px', height: '70px' }}><Link to={`/chitiet/${tinbds.id}`}>{tinbds.tieude}</Link></Card.Title>
                                                        <Card.Text>
                                                            Nội Dung Tin
                                             </Card.Text>
                                                        <Button variant="primary">Xem chi tiết tin</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>)
                                }
                                
                            }
                        })
                    }

                </Row>
                <hr></hr>
            </Container>
        </div>
    );
}
export default Trangchu;    