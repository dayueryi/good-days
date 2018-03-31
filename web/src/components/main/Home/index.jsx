import React, { Component } from 'react';
import Header from './../Header/index.jsx';
import Bannerlist from './banner/index.jsx';
import Footerlist from './../Footer/index.jsx';
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