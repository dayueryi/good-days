
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
            <div className="search">
                <input type="text" ref="getKeys" onChange={this.getVal}/>
                <span onClick={this.searchHandler}>搜索</span>
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
     
        // console.log(this.refs.getKeys.value);
    }
      getVal(){
          console.log(this.refs.getKeys.value);
      }
    getData(searchKindName){
      myajax.fetch({
        url:"http://localhost:4000/api/address/searchapi?searchKindName="+searchKindName,
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
    searchHandler(){
      // var getInput = this.refs.getKeys.value;
      // console.log(this.refs.getKeys.value);
      // this.getData();
        
    
    }
}
 
export default Home;