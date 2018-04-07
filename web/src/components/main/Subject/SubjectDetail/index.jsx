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
          
          {/* <div className="ga_wrap">
          <div className="detail" style={{"text-align": "center;"}}>
	            <img alt="张女士秦先生-后海2" src="http://www.piaovision.com.img.800cdn.com/uploads/allimg/180128/1-1P12QH352.jpg"/><br/>
	        &nbsp;
          </div>
          </div> */}
          <DetailCon/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
  getDataDetail(subjectID){
    myajax.fetch({
      url:'http://localhost:4000/api/detail/subjectdetail?subjectID='+subjectID,
      // url:'http://localhost:4000/detail/subjectdetail?subjectID='+subjectID,
      options:{},
      success:((data)=>{
       store.dispatch({
          type:"subjectDetail",
          data:data
        })
       
        console.log(subjectID,"555555555555");
        console.log(store.getState().subjectDetail[0].imgs,"==== ===== subjectDetail  ====");
      })
  }) 
  }
  componentDidMount(){
    
    console.log(this.props.location.pathname.split("/")[3],"2222222222222222222")
    this.getDataDetail(this.props.location.pathname.split("/")[3]);
  }

}

export default Subject;
