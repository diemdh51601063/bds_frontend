import React from "react";
import { Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { Container, Button } from "react-bootstrap";



const DangNhapComponent = () => {
  return (
    <MDBContainer>
      <hr></hr>

      <MDBRow>
        <MDBCol md="9">
          <form>
            <p className="h5 text-left mb-4">Nếu bạn đã là thành viên xin mời đăng nhập. Nếu chưa, xin mời bạn đăng ký tài khoản</p>
            <div className="grey-text">
              <MDBInput label="Họ tên" icon="user" group type="text" validate error="wrong"
                success="right" />

              <MDBInput label="Email" icon="envelope" group type="text" validate
                error="wrong" success="right" />
              <MDBInput label="Mật Khẩu" icon="lock" group type="password" validate />
              <MDBInput label="Nhập lại mật khẩu" icon="lock" group type="password" validate />

              <MDBInput label="Số điện thoại" icon="envelope" group type="email" validate error="wrong"
                success="right" />

              <MDBInput label="Địa chỉ" icon="user" group type="text" validate error="wrong"

                success="right" />
              <MDBInput label="CMND" icon="user" group type="text" validate error="wrong"

                success="right" />
              

            </div>
            <div className="text-center">
              <MDBBtn color="primary">ĐĂNG KÝ THÀNH VIÊN</MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol>
          <Container className="clearfix justify-content-right ">
            <MDBCol md='10'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                  width: '24rem'

                }}
              >
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                  <div className='text-left'>
                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong>ĐĂNG NHẬP</strong>

                    </h3>
                  </div>
                  <MDBInput
                    label='Nhập email'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                  />
                  <MDBInput
                    label='Nhập Mật Khẩu'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                  />

                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        <Link to="/dangtin" className="text-white">ĐĂNG NHẬP</Link>
                      </MDBBtn>
                    </div>
                  </MDBRow>

                </div>
              </MDBCard>
            </MDBCol>
          </Container>
        </MDBCol>

      </MDBRow>
      <hr></hr>

    </MDBContainer>
  );
};

export default DangNhapComponent;