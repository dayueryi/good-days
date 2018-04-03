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
         
            <div className="footer">
                <div className="brandIntegrity">
                    <ul className="brandIntegrity">
                        <li className="item1">
                            <strong>坚持口碑营销</strong>
                            <p>高品质打造强劲品牌口碑，成就魅力营销</p>
                        </li>
                        <li className="item2">
                            <strong>用客片说话</strong>
                            <p>用媲美样片的原创客片力量，打败浮夸宣传</p>
                        </li>
                        <li className="item3">
                            <strong>消费主张</strong>
                            <p>绝无任何隐形消费，绝不收取任何额外费用</p>
                        </li>
                        <li className="item4">
                            <strong>风险保障</strong>
                            <p>以公平消费为基本底线，到店不满意直接退款</p>
                        </li>
                        <li className="item5">
                            <strong>拍摄保障</strong>
                            <p>拍摄不满意无条件重拍，重拍不满意退款</p>
                        </li>
                    </ul>
                </div>
            </div>
           
       
         )
    }
    componentDidMount(){
        
    }
}
 
export default Home;