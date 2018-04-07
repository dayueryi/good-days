import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.scss";
import banner01 from "@/img/banner01.jpg";
import banner02 from "@/img/banner02.jpg";
import banner03 from "@/img/banner03.jpg";
import banner04 from "@/img/banner04.jpg";
import HotShowCon from './hotShowCon/index.jsx';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="Fs-box">
                      <div className="title">
                            <h2>最新旅拍客照</h2>
                            <h3>travel loveshow</h3>
                            <div className="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
                     
                      <div className="center">
          <div className="module-c-r major-list-outer">
            <HotShowCon/>
        
          </div>
        </div>
                            
             <div className="morebar"></div>
         </div>
      </div> 
       
    );
  }
  componentDidMount() {
    myajax.fetch({
      url:'http://localhost:4000/api/template',
      options:{},
      success:((data)=>{
       store.dispatch({
          type:"templateList",
          data:data
        })
        console.log(store.getState().template,"==== =====template  ====");
      })
  }) 
  }
}

export default Home;
