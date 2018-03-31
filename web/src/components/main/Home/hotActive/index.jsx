import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "home">
             
              
                 {/* <div className="Fs-box">
                      <div className="title">
                            <h2>最新旅拍客照</h2>
                            <h3>travel loveshow</h3>
                            <div class="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
                     
                      <div className="bx-cont bx-cont-2">
                            <div className="bx-cont bx-cont-4">
                                <div class="scrlpraise_guest">
                                    <a href="javascript:;" class="prev"></a>
                                    <div className="bd" id="hei">
                                       <div className="tempWrap" style="overflow:hidden; position:relative; width:1188px">
                                            <ul className="clearfix" style="width: 3168px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                                                <li style="float: left; width: 380px;">
                                                    <a href="">
                                                        <div className="img">
                                                               
                                                                <img src="" alt="三月第四周客照"/>
                                                        </div>
                                                        <div class="info">
                                                            <p>POST TIME:2018-03-27</p>
                                                            <span>三月第四周客照</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                       </div> 
                                    </div>
                                    <a href="javascript:;" class="next"></a>
                                </div>
                            </div>
                            <div class="morebar"></div>
                      </div>
                </div>  */}
               
          </div>
         )
    }
    componentDidMount(){
        var Swiper = window.Swiper;
    }
}
 
export default Home;