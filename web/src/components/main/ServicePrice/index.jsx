import React, { Component } from "react";

import Footerlist from "./../Footer/index.jsx";
import { NavLink } from "react-router-dom";
import ServicePriceCon from './servicePriceCon/index.jsx';
import "./index.scss";
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="box">
        <div className="x-content">
          <h1 className="png">婚纱摄影价格</h1>
          <div className="fenlei">
            <span>类别：</span>
            <NavLink to="/servicePrice/0" activeClassName="active">特惠套系</NavLink>
            <NavLink to="/servicePrice/1" activeClassName="active">VIP套系</NavLink>
            <NavLink to="/servicePrice/2" activeClassName="active">高端定制</NavLink>
            <NavLink to="/servicePrice/3" activeClassName="active">时尚写真</NavLink>
            <NavLink to="/servicePrice/4" activeClassName="active">亲子摄影</NavLink>
          </div>
          <div className="neirong">
         <ServicePriceCon/>
        </div>
            <Footerlist/>
        </div>
      </div>
    );
  }
  getServicePriceDate=(serviceType)=>{
    console.log(serviceType,"1111");
    myajax.fetch({
        url:"http://localhost:4000/servicePrice/servicePriceApi?serviceType="+serviceType,
        option:{},
        success:
        (data)=>{
         store.dispatch({
           type:"servicePriceList",
           data:data,
         })
       
        console.log(store.getState().servicePrice,"----66666--   redux -------------")
      }
       })
    }
    componentWillReceiveProps(nextProps){
     // console.log(nextProps,"--------")
      // console.log(nextProps.location.pathname,"=======nextProps=======");
      // console.log(this.props.location.pathname,"=======Props=======");
      if (nextProps.location.pathname !== this.props.location.pathname) {
        var  serviceUrl = nextProps.location.pathname.split("/")[2];
        console.log(serviceUrl,"-----------s");
        this.getServicePriceDate(serviceUrl)
       } 
       
    }
  componentDidMount(){
      // console.log(this.props.location.pathname.split("/")[2]);
      this.getServicePriceDate(this.props.location.pathname.split("/")[2]);
      this.getServicePriceDate(0);
      if(this.props.location.pathname.split("/")[2].length === 0){
       
        this.getServicePriceDate(0);
      }
  
  }
}

export default Home;
