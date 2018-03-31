import React, { Component } from 'react';
    
import { Layout,Sider,Content,Footer,Header } from 'antd';
import './nav.scss';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
        <div className = "x-content">
            {/* <div className="x-header">
                <header>
                    <div className="logo"></div>
                    <ul className="x-ul">
                        <li><a>首页</a></li>
                        <li><a>最美客照</a></li>
                        <li><a>主题类型</a></li>
                        <li><a>最新活动</a></li>
                        <li><a>新闻中心</a></li>
                        <li><a>粉丝论坛</a></li>
                    </ul>
                </header>
            </div>
                 */}
          <Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
          </div>

         
         )
    }
}
 
export default Home;