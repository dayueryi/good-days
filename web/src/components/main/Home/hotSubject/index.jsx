import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import $ from 'jquery';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
import SunjectCon from './SubjectCon/index.jsx';
// import SunjectCon from './SubjectCon/index.jsx';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
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
       
          <SunjectCon/>
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
        
    myajax.fetch({
      url:'http://localhost:4000/subject/api',
      options:{
        // options:{
        // }
      },
      success:((data)=>{
        // cb(data)
       store.dispatch({
          type:"subjectList",
          data:data
        })
// console.log("======================");
        console.log(store.getState().subject,"==== ===== redux  ====");
      })
  }
   
  ) 
        
          }
        
}
 
export default Home;