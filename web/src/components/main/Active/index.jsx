import React, { Component } from 'react';

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
         
              <div className = "">最新活动
              
              </div>
          
         )
         
         
    }
}
 
export default Home;