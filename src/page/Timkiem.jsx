import React, { Component } from 'react';
import Menu from '../components/header/menu';

import TimkiemComponent from '../components/timkiem/Timkiem';

class Timkiem extends Component {
  render() {
    return (
      <div>
        {/* <Menu /> */}
        <TimkiemComponent />
        {/* <Footer_end/> */}
      </div>
    );
  }
}
export default Timkiem;
