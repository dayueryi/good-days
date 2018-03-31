import React, { Component } from 'react';
import Navlist from './nav/index.jsx';
import Bannerlist from './banner/index.jsx';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './index.scss';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "x-home">
               <Layout>
                <Header>
                      <Navlist/>
                </Header>
                <Content>
                  <Bannerlist/>
                  Content
                  </Content>
                <Footer>Footer</Footer>
              </Layout>
            {/* <Navlist/>
            <Bannerlist/> */}
          </div>

         )
    }
}
 
export default Home;