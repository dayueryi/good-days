import React, { Component } from 'react';
import Header from './../Header/index.jsx';
import Bannerlist from './banner/index.jsx';
import Footerlist from './../Footer/index.jsx';
import HotActive from './hotActive/index.jsx';
import HotShow from './hotShow/index.jsx';
import HotSubject from './hotSubject/index.jsx';
import Address from './address/index.jsx';
import Footer from './../Footer/index.jsx';
// import Test from './test/index.jsx';
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
            <Address/>
            <HotShow/>
            <HotSubject/>
            <Footer/>
           
            </div>
            {/* <footer>
                页脚
            </footer> */}
          </div>

         )
    }
}
 
export default Home;