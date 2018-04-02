import React, { Component } from 'react';
import { Carousel } from 'antd';
import Swiper from 'swiper';
import './index.scss';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
class Home extends Component {
    state = {
        direction: 'vertical',
        loop: true,
    }
    render() { 
       
     return  (
         
            //  <div className="full" >
            //  <div className="full_down">
            //     <p className="demo-title">
            //         横向循环焦点图片展示[<a href="http://bbs.swiper.com.cn/forum.php?mod=viewthread&tid=2473" target="_blank">下载</a>]</p>
                <div id="certify">
                <div className="img pre-btn">
                <img src={banner01} className="btn"/></div>
                <div className="pre-load"><img src={banner02}/></div>
                <iframe style={{height:"480px",width:'100%'}} data-src="/demo/certify/" ></iframe>
                </div>
       
         )
    }
    componentDidMount(){
        // var Swiper = window.Swiper;
    }
}
 
export default Home;