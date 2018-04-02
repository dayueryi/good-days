import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import banner from "@/img/xinwen_tit.png";
import store from "@/store/index.js"

import Footerlist from "./../Footer/index.jsx";
import Main from "./w_main/index.jsx"
import Paging from './paging/index.jsx';
import myajax from "@/tool/myajax"
import "./index.scss";
class News extends Component {
  state = {
      paging:0
  };
  componentDidMount(){
  //  console.log(myajax)
    myajax.fetch({
        url:"http://localhost:4000/api/news",
        option:{},
        success:(data)=>{
            
          this.setState({
            paging:data.allPageNum
          },()=>{
              console.log(this.state.paging,"1111")
          })
        }
    })
  }
  render() {
    return (
      <div className="box">
        <div className="x-content">
          <div className="w_news">
            <h1 className="news_banner">
              <img src={banner} alt="" />
            </h1>
          {/*   <div className="w_main">
              <dl>
                <dt>
                  <Link to="/home">
                    <img src={news01} />
                  </Link>
                </dt>
                <dd>
                  <h3>time</h3>
                  <h5>TOPPIC WEDDING PHOTOGRAPHY</h5>
                  <h4>title</h4>
                  <p>
                    而香烟没停过而香烟没停过而香烟没停过
                    而香烟没停过而香烟没停过而香烟没停过而香烟没停过
                    而香烟没停过而香烟没停过而香烟没停过而香烟没停过
                    而香烟没停过而香烟没停过而香烟没停过而香烟没停过
                    而香烟没停过而香烟没停过而香烟没停过而香烟没停过
                  </p>
                  <div>
                    <Link to="/home">
                      <span>READ MORE</span>
                      <span>点击查看详情</span>
                    </Link>
                  </div>
                </dd>
              </dl>
            </div> */}
            <Main/>
            <Paging
            allPageNum = {this.state.paging}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
