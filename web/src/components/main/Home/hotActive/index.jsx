import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
import HotActiveCon from './hotActiveCon/index.jsx'
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "home">
             
              
                 <div className="Fs-box">
                      <div className="title">
                            <h2>热门活动</h2>
                            <h3>travel loveshow</h3>
                            <div className="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
                     
                      <div className="bx-cont bx-cont-2">
                            <div className="bx-cont bx-cont-4">
                                <div className="scrlpraise_guest">
                                    <a href="javascript:;" className="prev"></a>
                                    <div className="bd" id="hei">
                                       <div className="tempWrap">
                                       <HotActiveCon />
                                            {/* <ul className="clearfix">
                                            {
                                            store.getState().active.map((item,index)=>{
                                                 <li key={item.activeID}>
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
                                            })
                                             }   */}
                                                {/* <li>
                                                    <a href="" className="active">
                                                        <div className="img">        
                                                                <img src="http://img.vc520.com/uploads/201803/3-1P32G64Z70-L.jpg" alt="三月第四周客照"/>
                                                        </div>
                                                        <div className="info">
                                                            <p>POST TIME:2018-03-27</p>
                                                            <span>三月第四周客照</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" className="active">
                                                        <div className="img">        
                                                                <img src="http://img.vc520.com/uploads/201803/3-1P32G64Z70-L.jpg" alt="三月第四周客照"/>
                                                        </div>
                                                        <div className="info">
                                                            <p>POST TIME:2018-03-27</p>
                                                            <span>三月第四周客照</span>
                                                        </div>
                                                    </a>
                                                </li> 
                                            </ul>*/}
                                       </div> 
                                    </div>
                                    <a href="javascript:;" className="next"></a>
                                </div>
                            </div>
                            <div className="morebar"></div>
                      </div>
                </div>      
          </div>
         )
    }
    componentDidMount(){
        myajax.fetch({
            url:'http://localhost:4000/api/active',
            options:{},
            success:((data)=>{
             store.dispatch({
                type:"activeList",
                data:data
              })
              console.log(store.getState().active,"==== ===== active  ====");
            })
        }
         
        ) 
    }
}
 
export default Home;