import React, { useState, useEffect } from 'react';
import '../../assests/tintuc.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';
import { getAllPhuongXa, getAllQuanHuyen } from '../../services/thanhpho.service';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { themBds, xemchitietBds, xemchitietHinhBds } from '../../services/tinBds.service';
import { decodeToken } from '../../services/khachhang.service';
import { Redirect, useParams } from 'react-router';
function ChinhsuaTinTucComponent() {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

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

  const listThanhpho = useSelector(state => state.thanhpho.listThanhpho);

  const listHinhthuc = useSelector(state => state.hinhthuc.listHinhthuc);

  const listDanhmuc = useSelector(state => state.danhmuc.listDanhmuc);

  const listHuong = useSelector(state => state.huong.listHuong);

  const listDichvu = useSelector(state => state.dichvu.listDichvu);

  const listTienich = useSelector(state => state.tienich.listTienich);
  //console.log(listTienich);
  const [hinhanh, sethinhanh] = useState(null);

  const [listQuanHuyen, setListQuanHuyen] = useState([]);
  const [listPhuongXa, setListPhuongXa] = useState([]);
  const [listHinhAnh, setListHinhAnh] = useState([]);
  const [chieudai, setchieudai] = useState(1);
  const [chieurong, setchieurong] = useState(1);
  const [dientich, setdientich] = useState(1);
  const [giaca, setgiaca] = useState(0);

  const [chiphidichvu, setchiphidichvu] = useState(21000);
  const [curGianCach, setCurGianCach] = useState(7);
  const [giaDichVuChinh, setGiaDichVuChinh] = useState(3000);
  const [giaDichVuMoRong, setGiaDichVuMoRong] = useState(0);
  const [tongcong, setTongcong] = useState(21000);

  function taoNgay(giancach = 0) {
    var curr = new Date();
    curr.setDate(curr.getDate() + giancach);
    var ngay = curr.toISOString().substr(0, 10);
    return ngay;
  }
  //gian cach thoi gian mac dinh=7
  const [ngayketthuc, setngayketthuc] = useState(taoNgay(7));
  function renderNgayKetThuc(e) {
    setCurGianCach(e.target.value);
  }

  //gia dich vu theo thoi gian
  useEffect(() => {
    setngayketthuc(taoNgay(parseInt(curGianCach)));
    // console.log(giaDichVuChinh, curGianCach);
    setchiphidichvu(giaDichVuChinh * parseInt(curGianCach));
  }, [curGianCach])

  function renderGiaDichVu(e) {
    //console.log(e.target.dataset.chiphi, curGianCach);
    setGiaDichVuChinh(e.target.dataset.chiphi);
  }
  //tong cong
  useEffect(() => {
    setTongcong(parseInt(chiphidichvu) + parseInt(giaDichVuMoRong));
  }, [curGianCach, giaDichVuMoRong, chiphidichvu])

  useEffect(() => {
    setchiphidichvu(giaDichVuChinh * parseInt(curGianCach));
  }, [curGianCach, giaDichVuChinh])

  //format gia tien
  function formatPrice(price) {
    return String(price).replace(/(.)(?=(\d{3})+$)/g, '$1.');
  }

  //hình ảnh
  function hienthiListAnh(e) {
    const files = e.target.files;
    const clonedFiles = [];

    if (files.length > 5) {
      alert('Chỉ được chọn tối đa 5 hình');
      e.target.value = null;
      setListHinhAnh([]);
      return;
    }

    for (let i in files) {
      files[i].size && clonedFiles.push(files[i]);
    }

    let encodeFiles = clonedFiles.map(file => URL.createObjectURL(file));
    setListHinhAnh(encodeFiles);
  }

  //bat dong bo
  async function showQuanHuyen(id) {
    const quanhuyen = await getAllQuanHuyen(id);
    setListQuanHuyen(quanhuyen);
  }

  async function showPhuongXa(idQuanHuyen) {
    const phuongxa = await getAllPhuongXa(idQuanHuyen);
    setListPhuongXa(phuongxa);
  }


  // function getHinh(e) {
  //   console.log(e.target.files[0]);
  //   sethinhanh(e.target.files[0]);
  // }

  function addNewBds(data) {
    var formdata = new FormData();

    for (let [key, value] of Object.entries(data)) {
      formdata.append(key, value);
    }

    formdata.delete('hinhdaidien');

    //let arrHinhAnh = [];

    //console.log(data.hinhdaidien);

    for (let [key, value] of Object.entries(data.hinhdaidien)) {
      formdata.append('hinhdaidien[]', value, value.name);
    }

    //console.log(arrHinhAnh);

    //formdata.append('hinhdaidien', arrHinhAnh);

    for (let i of formdata) {
      console.log(i);
    }

    //data['hinhdaidien'] = hinhanh;

    //console.log(data);
    themBds(formdata, dispatch);

    alert('Thêm Tin Thành Công ! Chúng Tôi Sẽ Xét Duyệt Trong Vòng 9 Giờ');
  }

  function renderDientich() {
    const dientich = chieurong * chieudai;
    setdientich(dientich.toFixed(2));
  }

  useEffect(() => {
    if (chieudai < 0) {
      setchieudai(Math.abs(chieudai));
    }
    if (chieurong < 0) {
      setchieurong(Math.abs(chieurong));
    }
    renderDientich();
  }, [chieudai, chieurong]);


  useEffect(() => {
    if (giaca < 0) {
      setgiaca(Math.abs(giaca));
    }
  }, [giaca]);

  const [sotang, setsotang] = useState(0);
  useEffect(() => {
    if (sotang < 0) {
      setsotang(Math.abs(sotang));
    }
  }, [sotang]);

  const [sophongngu, setsophongngu] = useState(0);
  useEffect(() => {
    if (sophongngu < 0) {
      setsophongngu(Math.abs(sophongngu));
    }
  }, [sophongngu]);

  const [sophongwc, setsophongwc] = useState(0);
  useEffect(() => {
    if (sophongwc < 0) {
      setsophongwc(Math.abs(sophongwc));
    }
  }, [sophongwc]);

  return (
    decodeToken() === null ?
      <Redirect to="/"></Redirect>
      :
      <>
        {
          chitietTinBds == null && <h1>Loadinggggggggg</h1>
        }
        {
          chitietTinBds != null && <>

            <div class="main-body">
              <hr></hr>
              <div class="main-body_frame">
                <div class="frame__title">
                  <h3>ĐĂNG TIN RAO VẶT</h3>
                  <div class="frame__title___des">
                    <p>- Để nâng cấp chất lượng nội dung tin rao bất động sản, chúng tôi tiến hành duyệt toàn bộ tin rao đăng mới.</p>
                    <p>- Tin rao đúng sẽ được duyệt chậm nhất trong vòng 9h làm việc.</p>
                  </div>
                </div>

                {/*--form moi--*/}
                <Row>
                  <Col md={3}>
                    <Card border="primary" style={{ width: '20rem' }} className='w-100'>
                      <Card.Header style={{ color: 'red' }}><b>Lưu ý khi đăng tin</b></Card.Header>
                      <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                  </Card.Text>
                      </Card.Body>
                    </Card>
                    <br></br>

                    <Card border="primary" style={{ width: '20rem' }} className='w-100'>
                      <Card.Header style={{ color: 'green' }}><b>Lưu ý khi đăng tin</b></Card.Header>
                      <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                  </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={9}>
                    <Form onSubmit={handleSubmit(addNewBds)} className="border border-light p-3">
                      <p className="text-center h4 mb-4">Chỉnh Sửa Tin Bất Động Sản</p>
                      <Form className="border border-light p-5" >
                        <p className="h4 mb-4">Thông Tin Cơ Bản</p>
                        <Form.Row>
                          <Form.Group controlId="tieude" className='w-100'>
                            <Form.Label><b>Tiêu Đề Tin</b></Form.Label>
                            <Form.Control ref={register} type="text" placeholder="Tiêu đề tin" name="tieude" />
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>

                          <Form.Group as={Col} controlId="hinhthuc" className='w-100'>
                            <Form.Label><b>Hình Thức</b></Form.Label>
                            <Form.Control as="select" name="id_hinhthuc" ref={register}>
                              <option>--</option>
                              {
                                listHinhthuc.length !== 0 && listHinhthuc.map(hinhthuc => {
                                  return (
                                    <option value={`${hinhthuc.id}`} >{hinhthuc.tenhinhthuc}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="danhmuc" className='w-100'>
                            <Form.Label><b>Danh Mục</b></Form.Label>
                            <Form.Control as="select" name="id_danhmucbds" ref={register}>
                              <option>--</option>
                              {
                                listDanhmuc.length !== 0 && listDanhmuc.map(danhmuc => {
                                  return (
                                    <option value={`${danhmuc.id}`} >{danhmuc.tendanhmuc}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>



                        <Form.Row>
                          <Form.Group as={Col} controlId="Thanhpho">
                            <Form.Label><b>Thành Phố</b></Form.Label>
                            <Form.Control as="select" ref={register} name="tinh_thanhpho" onChange={(e) => { showQuanHuyen(e.target.value) }}>
                              <option>--</option>
                              {
                                listThanhpho.length !== 0 && listThanhpho.map(thanhpho => {
                                  return (
                                    <option value={`${thanhpho.code}`}>{thanhpho.name}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="Quanhuyen">
                            <Form.Label><b>Quận/Huyện</b></Form.Label>
                            <Form.Control as="select" ref={register} name="quan_huyen" onChange={(e) => { showPhuongXa(e.target.value) }} >
                              {
                                listQuanHuyen.length === 0 && <option>Chọn thành phố trước</option>
                              }
                              {
                                listQuanHuyen.length !== 0 && listQuanHuyen.map(quanhuyen => {
                                  return (
                                    <option value={`${quanhuyen.code}`}>{quanhuyen.name}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col} controlId="Phuongxa">
                            <Form.Label><b>Phường/Xã</b></Form.Label>
                            <Form.Control as="select" ref={register} name="phuong_xa">
                              {
                                listPhuongXa.length === 0 && <option>Chọn quận huyện trước</option>
                              }
                              {
                                listPhuongXa.length !== 0 && listPhuongXa.map(phuongxa => {
                                  return (
                                    <option value={`${phuongxa.code}`}>{phuongxa.name}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="diachi" >
                            <Form.Label><b>Địa Chỉ</b></Form.Label>
                            <Form.Control as="input" ref={register} name="diachi" >
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>


                          <Form.Group as={Col} controlId="chieudai">
                            <Form.Label><b>Chiều Dài: m</b></Form.Label>
                            <Form.Control type="number" as="input" ref={register} name="chieudai" onChange={(e) => { setchieudai(e.target.value) }} value={chieudai} >
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="chieurong" >
                            <Form.Label><b>Chiều Rộng: m</b></Form.Label>
                            <Form.Control type="number" as="input" ref={register} name="chieurong" onChange={(e) => { setchieurong(e.target.value) }} value={chieurong} >
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col} controlId="dientich">
                            <Form.Label><b>Diện Tích: m²</b></Form.Label>
                            <Form.Control as="input" ref={register} name="dientich" value={dientich}>

                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="dientichsudung" >
                            <Form.Label><b>Diện Tích Sử Dụng: m²(nếu có)</b></Form.Label>
                            <Form.Control type="number" as="input" ref={register} name="dientichsudung">
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>

                          <Form.Group as={Col} controlId="huong">
                            <Form.Label><b>Hướng:</b></Form.Label>
                            <Form.Control as="select" ref={register} name="id_huong">
                              <option>--</option>
                              {
                                listHuong.length !== 0 && listHuong.map(huong => {
                                  return (
                                    <option value={`${huong.id}`}>{huong.tenhuong}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="giacca" >
                            <Form.Label><b>Gía cả</b></Form.Label>
                            <Form.Control type="number" as="input" ref={register} name="giaca" onChange={(e) => { setgiaca(e.target.value) }} value={giaca}>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="donvi">
                            <Form.Label><b>Đơn vị:</b></Form.Label>
                            <Form.Control as="select" ref={register} name="donvitinh">
                              <option value="tỷ">Tỷ</option>
                              <option value="triệu">Triệu</option>
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col} controlId="phaply" className='w-100'>
                            <Form.Label><b>Pháp Lý:</b></Form.Label>
                            <Form.Control as="textarea" ref={register} name="phaply" rows="3" />
                          </Form.Group>
                          <Form.Group as={Col} controlId="hinhanh" className='w-100'>
                            <Form.Label><b>Hình ảnh tin:</b></Form.Label>
                            <Form.File onChange={hienthiListAnh} type="file" name="hinhdaidien" ref={register} multiple>
                            </Form.File>
                            {
                              listHinhAnh.length === 0 && <h3 className="mt-2">Chưa có hình ảnh!</h3>
                            }
                            {
                              listHinhAnh.length !== 0 && listHinhAnh.map(hinhanh => {
                                return (
                                  <img className="uploadHinh" src={`${hinhanh}`}></img>
                                )
                              })
                            }
                          </Form.Group>
                        </Form.Row>
                      </Form>
                      <hr></hr>

                      <Form className="border border-light p-5" >
                        <p className="h4 mb-4">Thông Tin Mô Tả</p>
                        <Form.Row>
                          <Col md={8}>
                            <Form.Group controlId="mota" className='w-100'>
                              <Form.Control as="textarea" name="mota" rows="6" ref={register} />
                            </Form.Group>
                          </Col>
                          <Col md={4}>
                            <b>Các quy định khi mô tả</b>
                          </Col>
                        </Form.Row>
                      </Form>

                      <hr></hr>
                      <Form className="border border-light p-5" >
                        <p className="h4 mb-4">Các Thông Tin Khác</p>

                        <Form.Row>
                          <Form.Group as={Col} controlId="sotang">
                            <Form.Label><b>Số Tầng</b></Form.Label>
                            <Form.Control type="number" as="input" name="sotang" ref={register} onChange={(e) => { setsotang(e.target.value) }} value={sotang}>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="sophongngu" >
                            <Form.Label><b>Số Phòng Ngủ</b></Form.Label>
                            <Form.Control type="number" as="input" name="sophongngu" ref={register} onChange={(e) => { setsophongngu(e.target.value) }} value={sophongngu}>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="sophongwc" >
                            <Form.Label><b>Số Phòng WC</b></Form.Label>
                            <Form.Control type="number" as="input" name="sophongwc" ref={register} onChange={(e) => { setsophongwc(e.target.value) }} value={sophongwc}>
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>

                          <Form.Group as={Col} id="tienichbenngoai">
                            <Form.Label><b>Tiện ích bên ngoài:</b></Form.Label>
                            {
                              listTienich.length !== 0 && listTienich.map(tienich => {
                                if (tienich.id_phanloai_tienich == 1) {
                                  return (
                                    <Form.Check name="tienichbenngoai" ref={register} value={`${tienich.id}`} type="checkbox" label={tienich.tentienich} />
                                  )
                                }

                              })
                            }

                          </Form.Group>

                          <Form.Group as={Col} id="tienichbentrong">
                            <Form.Label><b>Tiện ích bên trong:</b></Form.Label>
                            {
                              listTienich.length !== 0 && listTienich.map(tienich => {
                                if (tienich.id_phanloai_tienich == 2) {
                                  return (
                                    <Form.Check name="tienichbentrong" ref={register} value={`${tienich.id}`} type="checkbox" label={tienich.tentienich} />
                                  )
                                }

                              })
                            }

                          </Form.Group>

                        </Form.Row>

                      </Form>

                      <hr></hr>
                      <Form className="border border-light p-5" >
                        <p className="h4 mb-4">Dịch Vụ Đăng Tin</p>
                        <Form.Row>
                          {/* <Form.Group as={Col} controlId="dichvu">
                    <Form.Label><h5><b>Loại Dịch Vụ Đăng Tin :</b></h5></Form.Label>
                    {
                      listDichvu.length !== 0 && listDichvu.map((dichvu, index) => {
                        if (dichvu.id >= 5 && dichvu.id == 5) {
                          return (
                            <>
                              <Form.Label className='mt-3'><b>Dịch vụ mở rộng :</b></Form.Label>
                              <Form.Check onChange={() => { setGiaDichVuMoRong(dichvu.chiphi) }} value={`${dichvu.id}`} name="dichvuthem" ref={register} type="radio" label={`${dichvu.dichvu}`} />
                            </>
                          )
                        }
                        else if (dichvu.id >= 5 && dichvu.id != 5) {
                          return (
                            <>
                              <Form.Check onChange={() => { setGiaDichVuMoRong(dichvu.chiphi) }} value={`${dichvu.id}`} name="dichvuthem" ref={register} type="radio" label={`${dichvu.dichvu}`} />
                            </>
                          )
                        }
                        else {
                          return (
                            <Form.Check value={`${dichvu.id}`} data-chiphi={dichvu.chiphi} onChange={renderGiaDichVu} name="dichvu" ref={register} type="radio" label={`${dichvu.dichvu}`} checked={dichvu.chiphi == giaDichVuChinh} />
                          )
                        }

                      })
                    }
                  </Form.Group> */}

                          <Form.Group as={Col} id="motadichvu">
                            <Form.Label><h5><b>Lịch Đăng Tin :</b></h5></Form.Label><br></br>
                            <Form.Label><b>Ngày bắt đầu:</b></Form.Label>
                            <Form.Control value={taoNgay()} type="date" name="ngaybatdau" ref={register} readOnly />
                            <Form.Label><b>Thời gian đăng tin:</b></Form.Label>
                            {/* <Form.Group>
                      <Form.Check type="radio" value="7" name="thoigianhienthi" onChange={renderNgayKetThuc} label="7 ngày" checked={curGianCach == 7} />
                      <Form.Check type="radio" value="14" name="thoigianhienthi" onChange={renderNgayKetThuc} label="14 ngày" checked={curGianCach == 14} />
                      <Form.Check type="radio" value="30" name="thoigianhienthi" onChange={renderNgayKetThuc} label="30 ngày" checked={curGianCach == 30} />
                    </Form.Group> */}
                            <Form.Label><b>Ngày kết thúc:</b></Form.Label>
                            <Form.Control type="date" name="ngayketthuc" value={ngayketthuc} ref={register} readOnly />
                          </Form.Group>
                        </Form.Row>
                        <hr></hr>
                        <p className="h4 mb-4">Giá dịch vụ:</p>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label><b>Phí dịch vụ đăng tin:</b></Form.Label>
                            <Form.Control type="number" value={chiphidichvu} ref={register} name="chiphidangtin" placeholder="Normal text" />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label><b>Phí dịch vụ mở rộng :</b></Form.Label>
                            <Form.Control value={giaDichVuMoRong} type="number" ref={register} name="chiphimorong" placeholder="Normal text" />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label><b>Thành Tiền:</b></Form.Label>
                            <Form.Control value={formatPrice(tongcong) + " VNĐ"} ref={register} name="tongcong" placeholder="Normal text" />
                          </Form.Group>
                        </Form.Row>

                      </Form>
                      <Button type="submit" variant="primary">ĐĂNG TIN</Button>
                    </Form>
                  </Col>
                </Row>

                {/* end */}
                <hr></hr>
              </div>

            </div >
          </>
        }
      </>
  );
}
export default ChinhsuaTinTucComponent;
