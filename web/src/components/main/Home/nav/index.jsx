import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import banner01 from '@/img/banner01.jpg';
import banner02 from '@/img/banner02.jpg';
import banner03 from '@/img/banner03.jpg';
import banner04 from '@/img/banner04.jpg';
import { BrowserRouter as Router, Route, Switch,Link  } from "react-router-dom";
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "home">
               <ul>
                   <li>
                       <Link >三亚</Link>
                   </li>
               </ul>
          </div>
         )
    }
}
 
export default Home;