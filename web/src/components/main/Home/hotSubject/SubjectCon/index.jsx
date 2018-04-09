import React, { Component } from "react";

import { Link } from "react-router-dom";
import $ from 'jquery';
import "./index.scss";

import store from '@/store/index.js';

class Subject extends Component {
  state = {
    collapsed: false
  };
  render() {

    if(store.getState().subject){
      var arrs = [];
                store.getState().subject.forEach(element => {
                  arrs.push(
                   
                    <li key={element.subjectID}>
                     <Link to="/subject">
                    <div className="bg"></div>
                    <img src={element.subjectImgSrc} alt="致礼物般的你" />
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
       
        <div className="neirong">
        <ul>{arrs} </ul>
        </div>
    </div>
);

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

  }

}

export default Subject;
