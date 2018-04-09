import React, { Component } from 'react';
// import { Carousel } from 'antd';
// import Swiper from 'swiper';
import $ from 'jquery';
import './index.scss';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        direction: 'vertical',
        loop: true,
    }
    render() { 
       
     return  (
        <div className="Fs-box">
                      <div className="title">
                            <h2>热门拍点</h2>
                            <h3>travel loveshow</h3>
                            <div className="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
            <div className="jd_nr">
                    <Link className="a5" to="servicePrice/0" >蜈支洲岛主题作品</Link>
                    <Link className="a4" to="servicePrice/1">非诚勿扰主题作品</Link>
                    <Link className="a3" to="servicePrice/2">海棠湾主题作品</Link>
                    <Link className="a2" to="servicePrice/3">西岛主题作品</Link>
                    <Link className="a1" to="servicePrice/4">小洞天主题作品</Link>
            </div>
        </div>
           
        
         )
    }



    componentDidMount(){
        
        if(window.screen.width>=1200){
            $(".a1").css({width:"760px"}).siblings().css({width:"84px"});
            $(".jd_nr a").mouseenter(function(){
                if($(this).width()==760){

            }else{
                $(this).stop(true).animate({width:"760px"},500).siblings().stop(true).animate({width:"84px"},500);

            }
        });   
        
        }
        if(window.screen.width<1200){
            $(".a1").css({width:"624px"}).siblings().css({width:"69px"});
            if($(this).width()==624){

            }else{
                $(".jd_nr a").mouseenter(function(){
                    $(this).stop(true).animate({width:"624px"},500).siblings().stop(true).animate({width:"69px"},500);
        });  
     }
        }
      
    }
}
 
export default Home;