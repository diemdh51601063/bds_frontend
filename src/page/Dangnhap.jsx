import React, {Component} from 'react';
import '../assests/tintuc.css';
import Menu from '../components/header/menu';
import Footer_end from '../components/footer/footer_end';
import DangNhapComponent from '../components/nguoidung/dangnhap';

class DangNhap extends Component{
  render(){
    return(
      <div>
        {/* <Menu/> */}
        <DangNhapComponent />
        {/* <Footer_end/> */}
      </div>
    );
  }
}
export default DangNhap;