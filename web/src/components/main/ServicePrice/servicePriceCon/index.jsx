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
                          src={item.servicePriceImg}
                          alt={item.servicePriceName}
                        />
                      </NavLink>
                      <div className="d1">
                        <div className="d2">
                          <span className="s1 png">{item.servicePrice}</span>
                          <h2>
                            <NavLink to="">
                            {item.servicePriceName}
                            </NavLink>
                          </h2>
                          <div className="p">
                           {item.servicePriceTxt}
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
                            <b>抢订档期</b>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  )
                }) 
    }

  return ( <ul>{arrs}</ul>);

  }

  // getServicePriceDate=(serviceType)=>{
  //   myajax.fetch({
  //       url:"http://localhost:4000/servicePrice/servicePriceApi?serviceType="+serviceType,
  //       option:{},
  //       success:
  //       (data)=>{
  //             // console.log(data,"77777777++++++++++++++++++++++++++");
  //        store.dispatch({
  //          type:"servicePriceList",
  //          data:data,
  //        })
       
  //       console.log(store.getState().servicePrice,"----66666--   redux -------------")
  //     }
  //      })
  //   }
  
  // componentDidMount(){
  //     console.log(this.props.location.pathname.split("=")[1]);
  //     this.getServicePriceDate(this.props.location.pathname.split("=")[1]);
  
  // }

}

export default Subject;
