import React, { Component } from 'react';
import { Carousel } from 'antd';
import Footerlist from './../Footer/index.jsx';
import './index.scss';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
      <div className = "box">
      <div className="x-content">
          在线预约
      </div>
      {/* <Footerlist/> */}
    </div>
         
         )
    }
}
 
export default Home;