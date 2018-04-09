import React, { Component } from "react";

import {NavLink} from "react-router-dom";

import "./index.scss";

import store from '@/store/index.js';

class Subject extends Component {
  state = {
    collapsed: false,
    subjectKindData:[]
  };
  addBook(a){
    console.log(a)
    console.log(this)
    window.location.href="/book/"+a
  }
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
                          <a className="d5" href="javascript:;" onClick={this.addBook.bind(this,item.servicePriceID)}>
                          
                            <span className="png">
                            </span> 
                            <b >抢订档期</b>
                          </a>
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
