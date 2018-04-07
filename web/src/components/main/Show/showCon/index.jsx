import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.scss";
import {Link} from 'react-router-dom';
import store from '@/store/index.js';
class Home extends Component {
  state = {};
  render() {
    if(store.getState().template){
      var arrs = [];
                store.getState().template.forEach(element => {
                  arrs.push(
                    <li className="major-item" key={element.templateID}>
                    <Link to={"/show/showDetail/"+element.templateID} target="_blank">
                        <div className="box" ></div>
                        
                          <span className="txt-hide front-face">
                            <img className="img" src={element.templateLinkSrc} title={element.templateName} />
                          </span>
                          <span className="back-face to-right" />
                          <div className="wenzi">
                            <p>{element.templateTime}</p>
                            <p>{element.templateTitle}</p>
                            <p>景点：{element.addressType}</p>
                          </div>
                        </Link>
                    </li>
                   
                  )
                })
    }

  return (
    
        <ul className="major-list">{arrs} </ul>
       
     
);      
  }
  componentDidMount() {
   
  }
}

export default Home;
