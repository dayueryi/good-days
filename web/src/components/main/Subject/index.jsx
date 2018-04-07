import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./index.scss";
// import png from '@/img/zp.png';

import myajax from '@/tool/myajax.js';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false
  };
  render() {
    return (
      <div className="box">
        <div className="x-content">
          <h1 className="pngName" />
          <div className="neirong">
          <ul>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180317/1-1P31G011230-L.jpg" alt="致礼物般的你" />
              <a className="png" href="" title="致礼物般的你" style={{ top: "0" }}>
                <h3>致礼物般的你</h3>
              </a>
              <div className="span">
                <span className="s1">致礼物般的你</span>
                <span className="s2">拍摄场地：初见</span>
              </div>
            </li>

            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180317/1-1P31G00G80-L.jpg" alt="许你一世宠爱" />
              <a class="png" href="" title="许你一世宠爱"  style={{ top: "-358px" }}>
                <h3>许你一世宠爱</h3>
              </a>
              <div className="span">
                <span className="s1">许你一世宠爱</span>
                <span className="s2">拍摄场地：凤凰岭</span>
              </div>
            </li>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180314/1-1P314152K30-L.jpg" alt="那年夏天" />
              <a className="png" href="" title="那年夏天"  style={{ top: "-358px" }}>
                <h3>那年夏天</h3>
              </a>
              <div className="span">
                <span className="s1">那年夏天</span>
                <span className="s2">拍摄场地：凤凰岭</span>
              </div>
            </li>
            <li>
              <img src="http://www.toppic.com.cn/u/uploads/allimg/180114/1-1P1140931420-L.jpg" alt="绿意聆听你心" />
              <a className="png" href="" title="绿意聆听你心"  style={{ top: "-358px" }}>
                <h3>绿意聆听你心</h3>
              </a>
              <div className="span">
                <span className="s1">绿意聆听你心</span>
                <span className="s2">拍摄场地：椰梦长廊</span>
              </div>
            </li>
          </ul>
          </div>
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
   /*  myajax.fetch({
        url:'http://localhost:4000/subject/api?subjectKind'+subjectKind,
        options:{
          // options:{
          // }
        },
        success:((data)=>{
          // cb(data)
          store.dispather({
            type:"addSubject",
            data:data
          })
        })
    }
     
    )  */

  }

}

export default Subject;
