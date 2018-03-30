import React, { Component } from 'react';
import store from "@/store/index.js"
import './home.scss';
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
          <div className = "home">
                <button onClick = {this.clickDate.bind(this)}>点击</button>
          </div>
         )
    }
}
 
export default Home;