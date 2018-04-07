import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.scss";
import banner01 from "@/img/banner01.jpg";
import banner02 from "@/img/banner02.jpg";
import banner03 from "@/img/banner03.jpg";
import banner04 from "@/img/banner04.jpg";
import store from '@/store/index.js';
class Home extends Component {
  state = {};
  render() {
    if(store.getState().template){
      var arrs = [];
                store.getState().template.forEach(element => {
                  arrs.push(
                    <li className="major-item" key={element.templateID}>
                        <div className="box" />
                        <a href="" target="_blank">
                          <span className="txt-hide front-face">
                            <img className="img" src={element.templateLinkSrc} title={element.templateName} />
                          </span>
                          <span className="back-face to-right" />
                          <div className="wenzi">
                            <p>{element.templateTime}</p>
                            <p>{element.templateTitle}</p>
                            <p>景点：{element.addressType}</p>
                          </div>
                        </a>
                    </li>
                   
                  )
                })
    }

  return (
    
        <ul className="major-list">{arrs} </ul>
     
);

  
      
                     
        
            <ul className="major-list">
              
            </ul>
        
         
  }
  componentDidMount() {
   
  }
}

export default Home;