import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { timkiemBds } from '../../services/tinBds.service';
import { getAllQuanHuyen, getAllPhuongXa } from '../../services/thanhpho.service';

function Timkiem() {
  const { register, handleSubmit } = useForm();

  const listThanhpho = useSelector(state => state.thanhpho.listThanhpho);

  const listHinhthuc = useSelector(state => state.hinhthuc.listHinhthuc);

  const listDanhmuc = useSelector(state => state.danhmuc.listDanhmuc);

  const listHuong = useSelector(state => state.huong.listHuong);

  const listTienich = useSelector(state => state.tienich.listTienich);
  const [listQuanHuyen, setListQuanHuyen] = useState([]);
  const [listPhuongXa, setListPhuongXa] = useState([]);


  async function showQuanHuyen(id) {
    const quanhuyen = await getAllQuanHuyen(id);
    setListQuanHuyen(quanhuyen);
  }

  async function showPhuongXa(idQuanHuyen) {
    const phuongxa = await getAllPhuongXa(idQuanHuyen);
    setListPhuongXa(phuongxa);
  }

  const [listTimkiem, setlistTimkiem] = useState([]);
  async function timkiem(data) {

    const kqtimkiem = await timkiemBds(data);

    setlistTimkiem(kqtimkiem);
  }

  return (
    <Container className="clearfix justify-content-center ">
      <hr></hr>
      <Row>
        <Col md={5}>
          <div className="click-closed" />
          {/*/ Form Search Star /*/}
          <div className="box-collapse">
            <div className="title-box-d">
              <h3 className="title-d"><b>Tìm Kiếm</b></h3>
            </div>
            <div className="border border-light p-2">
              <form onSubmit={handleSubmit(timkiem)} className="form-a">
                <div className="row">

                  <div className="col-md-12 ">
                    <div className="form-group w-100">
                      <label ><h5>Tìm kiếm theo tên</h5></label>
                      <input type="text" ref={register} className="form-control form-control-a w-100" placeholder="Tiêu đề tin cần tìm" name="tieudetinbds" />
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label><h5>Hình Thức</h5></label>
                      <select className="form-control  form-control-a" ref={register} name="hinhthuc">
                        <option value=''>--</option>
                        {
                          listHinhthuc.length !== 0 && listHinhthuc.map(hinhthuc => {
                            return (
                              <option value={`${hinhthuc.id}`} >{hinhthuc.tenhinhthuc}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Danh Mục</h5></label>
                      <select className="form-control form-control-a" ref={register} name="danhmuc">
                        <option value=''>--</option>
                        {
                          listDanhmuc.length !== 0 && listDanhmuc.map(danhmuc => {
                            return (
                              <option value={`${danhmuc.id}`} >{danhmuc.tendanhmuc}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Thành Phố</h5></label>
                      <select onChange={(e) => { showQuanHuyen(e.target.value) }} ref={register} className="form-control form-control-a" name="thanhpho">
                        <option value=''>---</option>

                        {
                          listThanhpho.length !== 0 && listThanhpho.map(thanhpho => {
                            return (
                              <option value={`${thanhpho.code}`}>{thanhpho.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Quận/Huyện</h5></label>
                      <select onChange={(e) => { showPhuongXa(e.target.value) }} ref={register} className="form-control form-control-a" name="quanhuyen">
                        <option value=''>--</option>
                        {
                          listQuanHuyen.length === 0 && <option value=''>--</option>
                        }
                        {
                          listQuanHuyen.length !== 0 && listQuanHuyen.map(quanhuyen => {
                            return (
                              <option value={`${quanhuyen.code}`}>{quanhuyen.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-7 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Phường/Xã</h5></label>
                      <select className="form-control form-control-a" ref={register} name="phuongxa">
                        <option value=''>--</option>
                        {
                          listPhuongXa.length === 0 && <option value=''>--</option>
                        }
                        {
                          listPhuongXa.length !== 0 && listPhuongXa.map(phuongxa => {
                            return (
                              <option value={`${phuongxa.code}`}>{phuongxa.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-5 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Diện Tích</h5></label>
                      <select className="form-control form-control-a" ref={register} name="dientich">
                        <option value=''>--</option>
                        <option value="0-30">Dưới 30m²</option>
                        <option value="30-50">30 - 50m²</option>
                        <option value="50-80">50 - 80m²</option>
                        <option value="80-100">80 - 100m²</option>
                        <option value="100-150">100 - 150m²</option>
                        <option value="150-200">150 - 200m²</option>
                        <option value="200-300">200 - 300m²</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Hướng</h5></label>
                      <select className="form-control form-control-a" ref={register} name="huong">
                        <option value="">--</option>
                        {
                          listHuong.length !== 0 && listHuong.map(huong => {
                            return (
                              <option value={`${huong.id}`}>{huong.tenhuong}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label ><h5>Gía Cả</h5></label>
                      <select className="form-control form-control-a" ref={register} name="mucgia">

                        <option value=''>--</option>
                        <option value="0-500">Dưới 500 triệu</option>
                        <option value="500-800-triệu">500 - 800 triệu</option>
                        <option value="800-900-triệu">800 triệu - 900 triệu</option>
                        <option value="1-2-tỷ">1 tỷ - 2 tỷ</option>
                        <option value="2-3-tỷ">2 tỷ - 3 tỷ</option>
                        <option value="3-5-tỷ">3 tỷ - 5 tỷ</option>
                        <option value="5-7-tỷ">5 tỷ - 7 tỷ</option>
                        <option value="7-10-tỷ">7 tỷ - 10 tỷ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label><h5>Tiện ích bên ngoài</h5></label>
                      {
                        listTienich.length !== 0 && listTienich.map(tienich => {
                          if (tienich.id_phanloai_tienich == 2) {
                            return (
                              <Form.Check name="tienichbenngoai" ref={register} value={`${tienich.id}`} type="checkbox" label={tienich.tentienich} />
                            )
                          }

                        })
                      }
                    </div>
                  </div>


                  <div className="col-md-6 mb-2">
                    <div className="form-group w-100">
                      <label><h5>Tiện ích bên trong</h5></label>
                      {
                        listTienich.length !== 0 && listTienich.map(tienich => {
                          if (tienich.id_phanloai_tienich == 1) {
                            return (
                              <Form.Check name="tienichbentrong" ref={register} value={`${tienich.id}`} type="checkbox" label={tienich.tentienich} />
                            )
                          }

                        })
                      }

                    </div>
                  </div>
                  <div className="col-md-12">
                    <Button type="submit" variant="success">Tìm Kiếm</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr></hr>
        </Col>
        <Col md={7}>
          <div><h3 className="title-d"><b>Kết Quả Tìm Kiếm</b></h3></div>
          {
            listTimkiem.length === 0 && <h1>'Không có kết quả tìm kiếm'</h1>
          }
          {
            listTimkiem.length !== 0 && listTimkiem.map(tinbds =>
              <>
                <div className="border border-light p-2">
                  <h5 className="text-danger">{tinbds.tieude}</h5>
                  <Row>
                    <Col md={3}>
                      <img width="100%" height="100%" src="https://www.thuocdantoc.org/wp-content/uploads/2019/05/cay-hoa-hoe.jpg"></img>
                    </Col>
                    <Col md={9}>
                      <div>
                        {tinbds.mota}
                      </div>
                      <div className="d-flex flex-row justify-content-between mt-2">
                        <div>
                          <div>
                            Giá: <span className="text-primary">{tinbds.giaca} tỷ</span>
                          </div>
                          <div>
                            Diện tích: <span className="text-primary">{tinbds.dientich}m2</span>
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
              </>
            )
          }
        </Col>
      </Row >
      <hr></hr>
    </Container >
  );

}
export default Timkiem;