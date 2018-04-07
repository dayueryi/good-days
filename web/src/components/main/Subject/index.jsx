import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import {Router, Route,Switch,Redirect,Link } from 'react-router-dom';
import $ from 'jquery';
import "./index.scss";
import SubjectCon from './SubjectCon/index.jsx';
import SubjectIn from './SubjectIn/index.jsx';
import SubjectOut from './SubjectOut/index.jsx';
import SubjectKind from './SubjectKind/index.jsx';
import Footer from './../Footer/index.jsx';  
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
const SubMenu = Menu.SubMenu;
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
  // getSubjectLiseDate=(subjectKind)=>{
  //   myajax.fetch({
  //     url:"http://localhost:4000/subject/api?subjectKind="+subjectKind,
  //     option:{},
  //     success:
  //     (data)=>{
            
  //       this.setState({
  //         subjectKind:data,
         
  //       })
      
      // (data)=>{  
      //  store.dispatch({
        //  type:"subjectList",
        //  data:data,
      //  })
      // console.log(subjectKind,"-------------subjectKind -------------")
      //console.log(store.getState().subject,"-------------   redux -------------")
      // this.state.subjectKind = store.getState();
      // console.log(subjectKind,"-------------subjectKindData -------------")
  //   }
    
  //    })
  // }

  // componentWillReceiveProps(nextProps){
  //   //console.log(nextProps.match.params.pageID)
  //   if (nextProps.location.pathname != this.props.location.pathname) {
  //     var subjectKind = nextProps.match.params.subjectKind
  //     this.getSubjectLiseDate()
  //    } 
  // }
  componentDidMount(){
    
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
        options:{},
        success:((data)=>{
         store.dispatch({
            type:"subjectList",
            data:data
          })

          console.log(store.getState().subject,"==== ===== redux  ====");
        })
    }
     
    ) 
  }
}

 export default Subject;