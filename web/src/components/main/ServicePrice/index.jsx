import React, { Component } from "react";
import { Carousel } from "antd";
import Footerlist from "./../Footer/index.jsx";
import { NavLink } from "react-router-dom";
import servicePriceCon from './servicePriceCon/index.jsx';
import "./index.scss";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="box">
        <div className="x-content">
          <h1 className="png">婚纱摄影价格</h1>
          <div className="fenlei">
            <span>类别：</span>
            <NavLink to="/servicePrice/serviceType=0"  activeClassName="active">特惠套系</NavLink>
            <NavLink to="/servicePrice/serviceType=1" activeClassName="active">VIP套系</NavLink>
            <NavLink to="/servicePrice/serviceType=2" activeClassName="active">高端定制</NavLink>
            <NavLink to="/servicePrice/serviceType=3" activeClassName="active">时尚写真</NavLink>
            <NavLink to="/servicePrice/serviceType=5" activeClassName="active">亲子摄影</NavLink>
          </div>
          <div className="neirong">
         
        </div>
       
            <Footerlist/>
        </div>
      </div>
    );
  }
}

export default Home;
