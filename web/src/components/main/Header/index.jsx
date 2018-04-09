
// import { Layout, Menu, Breadcrumb } from 'antd';
import {Redirect,NavLink ,Link} from 'react-router-dom';
import React, { Component } from 'react';
import './index.scss';
import logo from '@/img/logo.png';
import $ from 'jquery';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
// const { Header, Content, Footer } = Layout;
class Home extends Component {
    state = {
      val:''
    }
    render() { 
      var str = (<NavLink to="/subject" activeClassName="active">
                      <span>
                        主题类型
                      </span>
                  </NavLink>);
       if(this.props.flag===false){
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
                <input type="text" ref="getKeys" />
                <span onClick={this.searchHandler.bind(this)}><Link to="/search" style={{"textDecoration": "none","color":"#fff"}}>搜索</Link></span>
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
                    <NavLink to="/servicePrice/0" activeClassName="active">
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
<<<<<<< HEAD
     
        // console.log(this.refs.getKeys.value);
=======
       // console.log(this.refs.getVal);
       
>>>>>>> 6e5fc5e5d9b235f725a94488ac20b009fa6cb412
    }
    
    getData(type){
      // console.log(subjectKindName);
      myajax.fetch({
        url:"http://localhost:4000/api/address/searchapi?type="+type,
        options:{},
        success:((data)=>{
          console.log("xqqxqq",data)
        store.dispatch({
            type:"searchList",
            data:data
          })
          console.log(store.getState().search,"==== =====  search  ====");
        })
    })
    }
    searchHandler(){
      var getInput = this.refs.getKeys;
      var getVal = getInput.value;
      console.log(getVal);
      this.getData(getVal);
     
    }
}
 
export default Home;