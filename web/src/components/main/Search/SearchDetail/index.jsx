import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./index.scss";
import DetailCon from './detailCon/index.jsx';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
import Footer from './../../Footer/index.jsx';
// import png from '@/img/zp.png';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false,
    subjectDetail:[]
  };
  render() {
    return (
      <div className="box">
        <div className="x-content">
          <h1 className="pngName" />
          <div className="neirong">
          <DetailCon/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
  getDataDetail(templateID){
    myajax.fetch({
      url:'http://localhost:4000/api/detail/showdetail?templateID='+templateID,
     
      option:{},
      success:((data)=>{
        console.log(data)
       store.dispatch({
          type:"showDetail",
          data:data
        })
       
        console.log(templateID,"555555555555");
        console.log(store.getState().showDetail[0].imgs," +==++==+=====subjectDetail -----------------");
      })
  }) 
  }
  componentDidMount(){
    
    console.log(this.props.location.pathname.split("/")[3],"2222222222222222222")
    this.getDataDetail(this.props.location.pathname.split("/")[3]);
  }

}

export default Subject;
