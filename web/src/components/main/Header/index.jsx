
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route,Switch,Redirect,NavLink ,Link} from 'react-router-dom';
import React, { Component } from 'react';
import './index.scss';
import logo from '@/img/logo.png';
import $ from 'jquery';
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
                    <p>首页</p>
                    {/* <span>Home</span> */}
                  </NavLink>
                </li>
                <li>
                <NavLink to="/show" activeClassName="active">
                
                  <p>最美客照</p>
                  {/* <span>Show</span> */}
                  </NavLink>
                </li>
                <li className="ul_li">
                <NavLink to="/subject" activeClassName="active">
                
                  <p>
                    主题类型
                    <ul className="small_ul">
                    <li>
                      {/* <Link to=""> */}
                          内景
                      {/* </Link> */}
                    </li>
                    <li>
                      {/* <Link to=""> */}
                          外景
                      {/* </Link> */}
                    </li>
                  </ul>
                  </p>
                  {/* <span>Subject</span> */}
                  
                  </NavLink>
                </li>
                <li>
                <NavLink to="/active" activeClassName="active">
                  <p>最新活动</p>
                  {/* <span>Active</span> */}
                  </NavLink>
                </li>  
                <li>
                <NavLink to="/news" activeClassName="active">
                <p> 新闻中心</p>
               {/* <span>News</span> */}
                  </NavLink>
                </li> 
                <li>
                <NavLink to="/forum" activeClassName="active">
                <p>粉丝论坛</p>
                {/* <span>Forum</span> */}
                  </NavLink>
                </li>
                <li>
                <NavLink to="/appointment" activeClassName="active">
                  <p>在线预约</p>
                  {/* <span>Appointment</span> */}
                </NavLink>
                </li> 
            </ul>
            </div>
        
        </div>

         
         )
    }
    componentDidMount(){
       /*  Jquery(".ul_li").hover(function(){
            Jquery(".small_ul").slideToggle("slow");
        }) */
        
        $(".ul_li").click(function(){
          $(".small_ul").slideToggle("slow");
        })
        $(".ul_li").mouseleave(function(){
          $(".small_ul").slideUp("slow");
        })
    }
}
 
export default Home;