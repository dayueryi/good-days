
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route,Switch,Redirect,NavLink ,Link} from 'react-router-dom';
import React, { Component } from 'react';
import './index.scss';
import logo from '@/img/logo.png';
import $ from 'jquery';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
const { Header, Content, Footer } = Layout;
class Home extends Component {
    state = {}
    render() { 
      var str = (<NavLink to="/subject" activeClassName="active">
                      <span>
                        主题类型
                      </span>
                  </NavLink>);
       if(this.props.flag==false){
        str = (<NavLink to="" activeClassName="active">
                <span>
                  主题类型
                </span>
              </NavLink>
              )
      }
      
     return  (
        <div className = "x-container">
        <div className="x-header">
            <div className="logo">
                <img src={logo} alt="111"/>
            </div>
            <div className="search">
                <input type="text" ref="getVal"/>
                <span onClick={this.searchHandler}>搜索</span>
            </div>
            
            <ul className="x-ul">
            <li >
                  <NavLink to="/home" activeClassName="active">
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                <NavLink to="/show" activeClassName="active">
                  <span>最美客照</span>
                  </NavLink>
                </li>
                <li className="ul_li">
                {/* <NavLink to="/subject" activeClassName="active">
                  <span>
                    主题类型
                  </span>
                </NavLink> */}
                {str}
                    <ul className="small_ul">
                    <li>
                      <Link to="/subject/subjectKind=0">
                          内景
                      </Link>
                    </li>
                    <li>
                      <Link to="/subject/subjectKind=1">
                          外景
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                    <NavLink to="/active" activeClassName="active">
                      <span>最新活动</span>
                    </NavLink>
                </li>  
                <li>
                    <NavLink to="/servicePrice" activeClassName="active">
                      <span>服务报价</span>
                    </NavLink>
                </li> 
                <li>
                
                    <NavLink to="/news" activeClassName="active">
                    <span> 新闻中心</span>
                    </NavLink>
                </li> 
                <li>
                    <NavLink to="/forum" activeClassName="active">
                        <span>粉丝论坛</span>
                    </NavLink>
                </li>
                
            </ul>
            </div>
        
        </div> 
         )
    }
    componentDidMount(){
        $(".ul_li").click(function(){
          $(".small_ul").slideToggle("slow");
        })
        $(".ul_li").mouseleave(function(){
          $(".small_ul").slideUp("slow");
        })
       // console.log(this.refs.getVal);
       
    }
    // getVal(){
      
    // }
    searchHandler(){

        myajax.fetch({
          // url:'http://localhost:4000/api/searchApi',
          options:{},
          success:((data)=>{
          store.dispatch({
              type:"searchList",
              data:data
            })
            console.log(store.getState().search,"==== =====  search  ====");
          })
      }) 
    
    }
}
 
export default Home;