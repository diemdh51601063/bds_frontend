import React, { Component } from 'react';
import '../assests/tintuc.css';
// import Menu from '../components/header/menu';
// import Footer_end from '../components/footer/footer_end';
import TinTucComponent from '../components/tintuc/index';

class TinTuc extends Component {
  render() {
    return (
      <div>
        {/* <Menu /> */}
        <TinTucComponent />
        {/* <Footer_end/> */}
      </div>
    );
  }
}
export default TinTuc;
