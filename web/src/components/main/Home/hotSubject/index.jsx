import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import $ from 'jquery';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "home" style={{background:"#eee"}}>
            <div className="center">
                 <div className="Fs-box">
                      <div className="title">
                            <h2>热门主题</h2>
                            <h3>travel loveshow</h3>
                            <div className="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
                       <div className="sieries">
         {/*<ul>
            <li>
                 <div className="box"></div>
                 <img src="http://www.lyy99.com/uploads/2018/02/081739383734.jpg" alt=""/>
                 <p> 非常时髦系列</p>
                 <p>TIME / 2017.09.25</p>
                 <p>潮流时装、视觉惊喜，艺术婚照的美学典范</p>
            </li>
            <li>
                 <div className="box"></div>
                 <img src="http://www.lyy99.com/uploads/2018/02/081739383734.jpg" alt=""/>
                 <p> 非常时髦系列</p>
                 <p>TIME / 2017.09.25</p>
                 <p>潮流时装、视觉惊喜，艺术婚照的美学典范</p>
            </li>
            <li>
                 <div className="box"></div>
                 <img src="http://www.lyy99.com/uploads/2018/02/081739383734.jpg" alt=""/>
                 <p> 非常时髦系列</p>
                 <p>TIME / 2017.09.25</p>
                 <p>潮流时装、视觉惊喜，艺术婚照的美学典范</p>
            </li>
            <li>
                 <div className="box"></div>
                 <img src="http://www.lyy99.com/uploads/2018/02/081739383734.jpg" alt=""/>
                 <p> 非常时髦系列</p>
                 <p>TIME / 2017.09.25</p>
                 <p>潮流时装、视觉惊喜，艺术婚照的美学典范</p>
            </li>
         </ul>   */}  
         
          <div className="neirong">
          <ul>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180317/1-1P31G011230-L.jpg" alt="致礼物般的你" />
              <a className="png" href="" title="致礼物般的你" style={{ top: "0" }}>
                <h3>致礼物般的你</h3>
              </a>
              <div className="span">
                <span className="s1">致礼物般的你</span>
                <span className="s2">拍摄场地：初见</span>
              </div>
            </li>

            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180317/1-1P31G00G80-L.jpg" alt="许你一世宠爱" />
              <a className="png" href="" title="许你一世宠爱"  style={{ top: "-358px" }}>
                <h3>许你一世宠爱</h3>
              </a>
              <div className="span">
                <span className="s1">许你一世宠爱</span>
                <span className="s2">拍摄场地：凤凰岭</span>
              </div>
            </li>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180314/1-1P314152K30-L.jpg" alt="那年夏天" />
              <a className="png" href="" title="那年夏天"  style={{ top: "-358px" }}>
                <h3>那年夏天</h3>
              </a>
              <div className="span">
                <span className="s1">那年夏天</span>
                <span className="s2">拍摄场地：凤凰岭</span>
              </div>
            </li>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180114/1-1P1140931420-L.jpg" alt="绿意聆听你心" />
              <a className="png" href="" title="绿意聆听你心"  style={{ top: "-358px" }}>
                <h3>绿意聆听你心</h3>
              </a>
              <div className="span">
                <span className="s1">绿意聆听你心</span>
                <span className="s2">拍摄场地：椰梦长廊</span>
              </div>
            </li>
          </ul>
          </div>
          </div>
         </div>
                </div>       
               
          </div>
         )
    }
    componentDidMount(){
    
        $(function(){
        
            $('.neirong ul li').hover(function(){
                $(this).children('.png').stop(true,true).delay(200).animate({'top':0},300);
            },function(){
                $(this).children('.png').stop(true,true).animate({'top':-358},600);
            })
            
        })
        
          }
        
}
 
export default Home;