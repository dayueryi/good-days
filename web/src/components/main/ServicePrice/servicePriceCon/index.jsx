import React, { Component } from "react";
import { Icon, Button, Menu } from "antd";
import { Link ,NavLink} from "react-router-dom";
import $ from 'jquery';
import "./index.scss";
import myajax from '@/tool/myajax.js';
import store from '@/store/index.js';
const SubMenu = Menu.SubMenu;
class Subject extends Component {
  state = {
    collapsed: false,
    subjectKindData:[]
  };
  render() {

    if(store.getState().servicePrice){
      var arrs = [];
                store.getState().servicePrice.forEach(item => {
                  arrs.push(
                    <li key={item.servicePriceID}>
                      <NavLink to="">
                        <img
                          className="suolue"
                          src="http://www.toppic.com.cn/images/index/baojia/35888.jpg"
                          alt="高端定制-H1套系"
                        />
                      </NavLink>
                      <div className="d1">
                        <div className="d2">
                          <span className="s1 png">{item.servicePrice}</span>
                          <h2>
                            <NavLink to="">
                              高端定制-H1套系
                            </NavLink>
                          </h2>
                          <div className="p">
                            中国“马尔代夫”蜈支洲岛、非诚勿扰2取景地亚龙湾国家森林公园六大主题拍摄；
                            再送游艇/海边马/跑车/水下/私家园林夜景/咖啡之翼/巴洛克内景任选2拍摄；
                            价值3800元微电影半天拍摄；
                            总监级摄影师、总监级造型师、灯光师三对一创意式拍摄；
                            签署协议，保障消费者权益，不满意重拍，重拍不满意退款，全程无隐形消费。
                          </div>
                        </div>
                        <div className="d3">
                          <NavLink className="d4" to="" activeclass = "active">
                            <span className="png"></span>
                            <b >立即咨询套系详情</b>
                          </NavLink>
                          <NavLink className="d5" to="" activeclass = "active">
                          
                            <span className="png">
                            </span> 
                            <b>加入购物车</b>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  )
                })
              
      
      
    }

  return ( <ul>{arrs}</ul>);

  }

  getServicePriceDate=(serviceType)=>{
    myajax.fetch({
        url:"http://localhost:4000/subject/api?serviceType="+serviceType,
        option:{},
        success:
        (data)=>{
              console.log(data,"77777777++++++++++++++++++++++++++");
              
        //   this.setState({
        //     subjectKindData:data
        //   })
        
        // (data)=>{  
         store.dispatch({
           type:"servicePriceList",
           data:data,
         })
        // console.log(subjectKind,"-------------subjectKind -------------")
        console.log(store.getState().servicePrice,"----66666--   redux -------------")
        // this.state.subjectKind = store.getState();
        // console.log(subjectKind,"-------------subjectKindData -------------")
    //    console.log(subjectKindData,"-------------subjectKindData -------------")
        
      }

       })
    }
  
  componentDidMount(){
   
    //   console.log(this.props.location.pathname.split("=")[1]);
      this.getServicePriceDate(this.props.location.pathname.split("=")[1]);
  
  }

}

export default Subject;
