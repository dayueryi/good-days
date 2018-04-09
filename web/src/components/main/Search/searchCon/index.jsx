import React, { Component } from "react";

import "./index.scss";
import {Link} from 'react-router-dom';
import store from '@/store/index.js';
class Home extends Component {
  state = {};
  render() {
    if(store.getState().search){
      var arrs = [];
      store.getState().search.forEach(element => {
                  arrs.push(
                    <li className="major-item" key={element.subjectID}>
                    <Link to={"/show/showDetail/"+element.subjectID} >
                        <div className="box" ></div>
                        <div className="cxt">
                          <span className="txt-hide front-face">
                            <img className="img" src={element.subjectImgSrc} title={element.subjectName} alt=""/>
                          </span>
                          {/* <span className="back-face to-right"></span> */}
                          <div className="wenzi">
                          <p>{element.subjectPrice}</p>
                          <p>
                            <b>{element.subjectKindName}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b >{element.subjectStyle}</b>
                          </p>
                            
                            
                            <p>景点：{element.subjectAddress}</p>
                          </div>
                          </div>
                        </Link>
                    </li>
                   
                  )
                })
    }

  return (
    
        <ul className="renamelist">{arrs} </ul>
       
     
);      
  }
  componentDidMount() {
   
  }
}

export default Home;
