import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import {Router, Route,Switch,Redirect,Link } from 'react-router-dom';
import $ from 'jquery';
import "./index.scss";
import SubjectCon from './SubjectCon/';
import SubjectIn from './SubjectIn/index.jsx';
import SubjectOut from './SubjectOut/index.jsx';
// import png from '@/img/zp.png';
import Footer from './../Footer/index.jsx';  
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false,
    
  };
  render() {
    return (
      <div className="box">
        <div className="x-content">
       
        <Switch>
          <Route path="/subject/0" component={SubjectIn} />
          <Route path="/subject/1" component={SubjectOut } />
          <Route path="/subject" component={SubjectCon} />
        </Switch>
       
          <Footer/> 
          
        </div>
      </div>
    );
  }
  componentDidMount(subjectKind){
    
      $(function(){

        $('.neirong ul li').hover(function(){
          $(this).children('.png').stop(true,true).delay(200).animate({'top':0},300);
        },function(){
          $(this).children('.png').stop(true,true).animate({'top':-358},600);
        })
	
})
console.log(this)
    myajax.fetch({
        url:'http://localhost:4000/subject/api',
        options:{
          // options:{
          // }
        },
        success:((data)=>{
          // cb(data)
         store.dispatch({
            type:"subjectList",
            data:data
          })
          console.log(store.getState().subject,"====  redux  ====");
        })
    }
     
    ) 

  }

}

export default Subject;
