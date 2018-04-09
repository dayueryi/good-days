import React, { Component } from "react";

import banner from "@/img/xinwen_tit.png";
import store from "@/store/index.js"


import Footer from './../Footer/index.jsx';
import Main from "./w_main/index.jsx"
import Paging from './paging/index.jsx';
import myajax from "@/tool/myajax"
import "./index.scss";
class News extends Component {
  state = {
      paging:0,
      pageNum:"",
      newsList : []
  };

  componentDidUpdate(){
    
  }
  componentWillMount(){
    console.log(this.props.match.params.pageID)
    this.setState({
      pageNum:this.props.match.params.pageID
    })
 

  }
  getNewsLiseDate=(pageNum)=>{
    myajax.fetch({
      url:"http://localhost:4000/api/news?pageNum="+pageNum,
      option:{},
      success:(data)=>{
          
       store.dispatch({
         type:"listData",
         data:data
       }
      )
      console.log(store.getState().news,"redux")
      }
     })
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps.match.params.pageID)
    if (nextProps.location.pathname !== this.props.location.pathname) {
      var pageNum = nextProps.match.params.pageID
      this.getNewsLiseDate(pageNum)
     } 
     
  }
  componentDidMount(){
    myajax.fetch({
        url:"http://localhost:4000/api/news",
        option:{},
        success:(data)=>{
            
          this.setState({
            paging:data.allPageNum
          },()=>{
         
          })
        }
    })
    this.getNewsLiseDate(1)
  }
  render() {
    return (
      <div className="box">
        <div className="x-content bg_center">
          <div className="w_news">
            <h1 className="news_banner">
              <img src={banner} alt="" />
            </h1>
        
            <Main newsList = {this.state.newsList}/>
            <Paging
            allPageNum = {this.state.paging}
            />
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default News;
