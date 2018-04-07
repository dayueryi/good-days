import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./index.scss";
import store from '@/store/index.js';
import myajax from '@/tool/myajax.js';
// import png from '@/img/zp.png';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false
  };
  render() {
 console.log(store.getState().subjectDetail.imgs,"limian")
    if(store.getState().subjectDetail.imgs){
      var arrs = [];
          
           
      store.getState().subjectDetail.imgs.forEach((item,index) => {
                  arrs.push(
                
                        <li className="imgLi" key={index}>
                            <img className="img" key={index} src={item.Images} alt=""/>  
                         </li>
                  )
                })
              
      
      
    }

  return (
    // style={{"text-align": "center;"}}
    <div className="ga_wrap">
          <div className="detail" >
             <ul>
              {arrs}
             </ul> 
	        &nbsp;
          </div>
          </div>
    ); 
  }

  
}

export default Subject;
