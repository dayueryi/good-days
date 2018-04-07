import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
class Home extends Component {
    state = {}
    render() { 
       
   
        //   <div className = "home">
           
              if(store.getState().active){
                    var arr=[];
                    store.getState().active.map((item,index)=>{
                        arr.push(
                        <li key={item.activeID+1}>
                           <a href="" className="active">
                               <div className="img">        
                                       <img src={item.activeAddress} alt={item.activetxt2}/>
                               </div>
                               <div className="info">
                                   <p>POST TIME:{item.activeTime}</p>
                                   <span>{item.activetxt2}</span>
                               </div>
                           </a>
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