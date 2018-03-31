import React, { Component } from 'react';
import Footerlist from './../Footer/index.jsx';
import './index.scss';
import store from "@/store/index.js"

class Home extends Component {
    state = {}
    clickDate(){
        store.dispatch({
            type:"addList",
            data:"2"
        })
        console.log(store.getState().todolist)
    }
    render() { 
        
     return  (
         
              <div className = "box">
              <div className="x-content">
              最新活动
              <p>
              最新活动最新活动
              </p>
              <p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p>
              <p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p><p>
              最新活动最新活动
              </p>
              </div>
              {/* <Footerlist/> */}
              </div>
          
         )
         
         
    }
}
 
export default Home;