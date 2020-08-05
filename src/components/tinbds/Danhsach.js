import React from 'react';
import { Card, Container, Pagination, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BACKEND_URL } from '../../services/http.service';
function Danhsach() {
    const listBds = useSelector(state => state.tinBds.listBds);
    //console.log(listBds);

    return (
        <Container className="clearfix justify-content-center ">
            <hr></hr>
            {
                listBds.length !== 0 && listBds.map(tinbds => {
                    if(tinbds.tinhtrang==1){
                    return (
                        
                        <Card className="mt-3">
                            <Row>
                                <Col md={4}>
                                    <Card.Img variant="top" height="300px"
                                        src={`${BACKEND_URL}/img/tinbds/${tinbds.hinhdaidien}`} />
                                </Col>
                                <Col md={8}>

                                    <Card.Body>
                                        <Card.Text>
                                            <h3><Link to={`/chitiet/${tinbds.id}`}>{tinbds.tieude}</Link></h3>
                                        </Card.Text>
                                        <Card.Text>
                                            <h4>Nội Dung Mô Tả:</h4>
                                        </Card.Text>
                                        <Card.Text>
                                            {tinbds.mota}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )}
                })
            
            }
            {
                listBds.length === 0 && <h1>Loader</h1>
            }

        </Container>

    );
}

export default Danhsach;