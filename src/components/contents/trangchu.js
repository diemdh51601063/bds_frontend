import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    return (
        <Container className="clearfix justify-content-center ">

            <hr></hr>
            <hr></hr>
            <h3>Tin Bất Động Sản Nổi Bật</h3>
            <Row className="my-5">

                <Col sm={12}>

                    <Carousel responsive={responsive}>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                        <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                        <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </Carousel>
                </Col>


            </Row>
            <hr></hr>

            <hr></hr>
            <h3>Tin Bất Động Sản Mới Nhất</h3>
            <Row className="my-5">

                <Col sm={12}>

                    <Carousel responsive={responsive}>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                        <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Tiêu đề tin</Card.Title>
                                        <Card.Text>
                                            Nội Dung Tin
                                         </Card.Text>
                                        <Button variant="primary">Xem chi tiết tin</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </Carousel>
                </Col>


            </Row>
            <hr></hr>
            <hr></hr>
            <h3>Tin Tức Nổi Bật</h3>
            <Row className="my-5">

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src="http://cdn.batdongsan.vn/FileManager/Upload/23062020/thue-van-phong-imperia-garden-6.jpg" />
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    );
}
export default Trangchu;    