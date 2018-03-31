
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route,Switch,Redirect,NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './index.scss';
import logo from '@/img/logo.png';
const { Header, Content, Footer } = Layout;
class Home extends Component {
    state = {}
    render() { 
       
     return  (
        <div className = "x-container">
        <div className="x-header">
            <div className="logo">
                <img src={logo} alt="111"/>
            </div>
            <div className="search">
                <input type="text"/>
                <span>搜索</span>
            </div>
            
            <ul className="x-ul">
            <li >
                  <NavLink to="/home" activeClassName="active">
                    首页
                  </NavLink>
                </li>
                <li>
                <NavLink to="/show" activeClassName="active">
                最美客照
                  </NavLink>
                </li>
                <li>
                <NavLink to="/subject" activeClassName="active">
                主题类型
                  </NavLink>
                </li>
                <li>
                <NavLink to="/active" activeClassName="active">
                最新活动
                  </NavLink>
                </li>  
                <li>
                <NavLink to="/news" activeClassName="active">
                新闻中心
                  </NavLink>
                </li> 
                <li>
                <NavLink to="/forum" activeClassName="active">
                粉丝论坛
                  </NavLink>
                </li>
                <li>
                <NavLink to="/appointment" activeClassName="active">
                  
                在线预约
                </NavLink>
                </li> 
            </ul>
            </div>
        
        </div>

         
         )
    }
}
 
export default Home;