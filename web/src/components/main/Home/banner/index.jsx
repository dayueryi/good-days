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
                <Carousel autoplay>
                    <div>
                        <img src={banner01} alt=""/>
                    </div>
                    <div><img src={banner02} alt=""/></div>
                    <div><img src={banner03} alt=""/></div>
                    <div><img src={banner04} alt=""/></div>
                </Carousel>
          </div>
         )
    }
}
 
export default Home;