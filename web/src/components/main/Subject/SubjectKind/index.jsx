import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./index.scss";
// import myajax from '@/tool/myajax.js';
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false,
    subjectKindData:[]
  };
  render() {

    if(store.getState().subject){
      var arrs = [];
          
           
                store.getState().subject.forEach(element => {
                  arrs.push(
                    <li key={element.subjectID}>
                    <Link className="awidth" to={"/subject/subjectDetail/"+element.subjectID}>
                    <div className="bg"></div>
                    
                    <img src={element.subjectImgSrc} alt={element.subjectName} />
                      <h3>{element.subjectName} <span>￥{element.subjectPrice}</span></h3>
                    <div className="span">
                      <span className="s1">{element.subjectName}</span>
                      <span className="s2">{element.subjectAddress}</span>
                    </div>
                    </Link>
                  </li>
                  )
                })
              
      
      
    }

  return (
    <div className="center">
        <h1 className="pngName" ></h1>
        <div className="neirong">
        <ul>{arrs}</ul>
        </div>
    </div>
);

  }

  getSubjectLiseDate=(subjectKind)=>{
    myajax.fetch({
        url:"http://localhost:4000/subject/api?subjectKind="+subjectKind,
        option:{},
        success:
        (data)=>{
              console.log(data,"77777777++++++++++++++++++++++++++");
              
        //   this.setState({
        //     subjectKindData:data
        //   })
        
        // (data)=>{  
         store.dispatch({
           type:"subjectList",
           data:data,
         })
        // console.log(subjectKind,"-------------subjectKind -------------")
        console.log(store.getState().subject,"----66666--   redux -------------")
        // this.state.subjectKind = store.getState();
        // console.log(subjectKind,"-------------subjectKindData -------------")
    //    console.log(subjectKindData,"-------------subjectKindData -------------")
        
      }

       })
    }
  
  componentDidMount(){
    // console.log(store.getState().subject);
      $(function() {

        $('.neirong ul li').hover(function(){
          $(this).children('.png').stop(true,true).delay(200).animate({'top':0},300);
        },function(){
          $(this).children('.png').stop(true,true).animate({'top':-358},600);
        })
        
      })
    //   console.log(this.props.location.pathname.split("=")[1]);
      this.getSubjectLiseDate(this.props.location.pathname.split("=")[1]);
  
  }

}

export default Subject;
