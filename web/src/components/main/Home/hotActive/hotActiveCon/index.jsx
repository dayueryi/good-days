import React, { Component } from 'react';
// import { Carousel } from 'antd';
import './index.scss';
import {Link} from 'react-router-dom';
// import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
class Home extends Component {
    state = {}
    render() { 
       
   
        //   <div className = "home">
           
              if(store.getState().active){
                    var arr=[];
                    store.getState().active.forEach((item,index)=>{
                        arr.push(
                        <li key={item.activeID+1}>
                           <Link to="/active" className="active">
                               <div className="img">        
                                       <img src={item.activeAddress} alt={item.activetxt2}/>
                               </div>
                               <div className="info">
                                   <p>POST TIME:{item.activeTime}</p>
                                   <span>{item.activetxt2}</span>
                               </div>
                           </Link>
                       </li>
                       )
                   })
              }
                
                                            
                                       
        //   </div>
        return  ( <ul className="clearfix">{arr}</ul>)
    }
    componentDidMount(){
        
    }
}
 
export default Home;