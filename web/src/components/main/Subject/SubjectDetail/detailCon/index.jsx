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

    if(store.getState().subject){
      var arrs = [];
          
           
      // store.getState().subjectDetail[0].imgs.map((item,index) => {
      //             arrs.push(
                
                        // <li key={index}>
                        // <img src={item.Images} alt=""/>
                            
                        // </li>
                   
                    
                       
                    // <li key={element.subjectID}>                 
                    //     <img key={element.subjectID}  alt="张女士秦先生-后海2" src="http://www.piaovision.com.img.800cdn.com/uploads/allimg/180128/1-1P12QH352.jpg"/><br/>                     
                    // </li>
                //   )
                // })
              
      
      
    }

  return (
    // style={{"text-align": "center;"}}
    <div className="ga_wrap">
          <div className="detail" >
	           <ul>1111111111111111111111{arrs}</ul> 
	        &nbsp;
          </div>
          </div>
    ); 
  }
  
}

export default Subject;
