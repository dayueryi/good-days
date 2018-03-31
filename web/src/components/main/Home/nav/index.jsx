
import { Layout, Menu, Breadcrumb } from 'antd';

import React, { Component } from 'react';
import './nav.scss';

const { Header, Content, Footer } = Layout;
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
                    <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo" />
                    <div className="search" >
                        <input type="text"/>
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">最美客照</Menu.Item>
                        <Menu.Item key="3">主题类型</Menu.Item>
                        <Menu.Item key="4">最新活动</Menu.Item>
                        <Menu.Item key="5">新闻中心</Menu.Item>
                        <Menu.Item key="6">粉丝论坛</Menu.Item>
                    </Menu>
                    </Header>
                    {/* <Content style={{ marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: 'pink', padding: 24, minHeight: 380 }}>Content</div>
                    </Content> */}
                   
                </Layout>
         
          </div>

         
         )
    }
}
 
export default Home;