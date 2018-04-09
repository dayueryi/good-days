import React, { Component } from "react";
import {  Link } from "react-router-dom";

import store from "@/store/index.js";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    // console.log(store.getState().news);
  }
  componentWillReceiveProps() {}
  render() {
    console.log("props",this.props.newsList)
    if( store.getState().news){
      var arr = [];

      store.getState().news.forEach(element => {
        arr.push(
          <dl key={element.newsID}>
            <dt>
              <Link to={"/newsDetail/"+element.newsID}>
                <img src={element.newsTopImg} alt=""/>
              </Link>
            </dt>
            <dd>
              <h3>{element.newsTime}</h3>
              <h5>TOPPIC WEDDING PHOTOGRAPHY</h5>
              <h4>{element.newsName}</h4>
              <p>{element.newsContent}</p>
              <div>
                <Link to={"/newsDetail/"+element.newsID}>
                  <span>READ MORE</span>
                  <span>点击查看详情</span>
                </Link>
              </div>
            </dd>
          </dl>
        );
      });
    }

  return (<div className="w_main">{arr}</div>);
  }
}

export default Main;
