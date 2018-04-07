import React, { Component } from 'react';
import Footer from './../Footer/index.jsx';
import './index.scss';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
import ShowCon from './showCon/index.jsx';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
        <div className="box">
        <div className="x-content">
         <div className="center">
         <h1 className="pngTitle">婚纱摄影客片</h1>
         <div className="module-c-r major-list-outer">
                <ShowCon/>
                
                </div>
                </div>
                <Footer/>
                </div>
              
        </div>

         )
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