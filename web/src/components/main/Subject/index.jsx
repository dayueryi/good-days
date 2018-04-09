import React, { Component } from "react";

import {Router, Route,Switch,Redirect,Link } from 'react-router-dom';
import $ from 'jquery';
import "./index.scss";
import SubjectCon from './SubjectCon/index.jsx';

import SubjectKind from './SubjectKind/index.jsx';
import Footer from './../Footer/index.jsx';  
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';

class Subject extends Component {
  state = {
    collapsed: false,
    subjectKind:''
  };
  render() {
    return (
      <div className="box">
        <div className="x-content">
       
        <Switch>
          <Route path="/subject/subjectKind=0" component={SubjectKind} /> 
           <Route path="/subject/subjectKind=1" component={SubjectKind } />
          <Route path="/subject" component={SubjectCon} />
        </Switch>
       
          <Footer/> 
          
        </div>
      </div>
    );
  }

  componentDidMount(){
    
      $(function(){

        $('.neirong ul li').hover(function(){
          $(this).children('.png').stop(true,true).delay(200).animate({'top':0},300);
        },function(){
          $(this).children('.png').stop(true,true).animate({'top':-358},600);
        })
	
})
// console.log(this)
    myajax.fetch({
        url:'http://localhost:4000/subject/api',
        options:{},
        success:((data)=>{
         store.dispatch({
            type:"subjectList",
            data:data
          })

          // console.log(store.getState().subject,"==== ===== redux  ====");
        })
    }
     
    ) 
  }
}

 export default Subject;