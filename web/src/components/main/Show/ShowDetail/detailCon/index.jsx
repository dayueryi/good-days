import React, { Component } from "react";



import "./index.scss";
import store from '@/store/index.js';

// import png from '@/img/zp.png';

class Subject extends Component {
  state = {
    collapsed: false
  };
  render() {
 console.log(store.getState().showDetail.imgs,"limian")
    if(store.getState().showDetail.imgs){
      var arrs = [];
          
           
      store.getState().showDetail.imgs.forEach((item,index) => {
                  arrs.push(
                
                        <li className="imgLi" key={index}>
                            <img className="img" key={index} src={item.Images} alt=""/>  
                         </li>
                        
                  )
                })
    }

  return (
   
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
