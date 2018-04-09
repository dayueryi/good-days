import React, { Component } from "react";



import "./index.scss";
import store from '@/store/index.js';


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
