import React, { Component } from 'react';
import Header from './../Header/index.jsx';
import Bannerlist from './banner/index.jsx';
import Footerlist from './../Footer/index.jsx';
import HotActive from './hotActive/index.jsx';
import HotShow from './hotShow/index.jsx';
import HotSubject from './hotSubject/index.jsx';

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './index.scss';

import { Layout } from 'antd';
// const { Header, Footer, Sider, Content ,Menu,Breadcrumb} = Layout;

class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "box">
             
            <div className="x-content">
            <Bannerlist/>
            <HotActive/>
            <HotShow/>
            <HotSubject/>
  
            内容内容内容内容内容内容内容
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
                <p>内容</p>
            </div>
            {/* <footer>
                页脚
            </footer> */}
          </div>

         )
    }
}
 
export default Home;