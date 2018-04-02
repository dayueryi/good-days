import React, { Component } from 'react';
import banner from "@/img/news_banner.jpg";
import title from "@/img/news_list_title.jpg"
import './index.scss';
class Home extends Component {
    state = {}
    render() { 
       
     return  (
          <div className = "w_news">
                <div className = "news_banner">
                    <img src={banner} alt=""/>
                </div>
                <h2>
                    <img src={title} alt=""/>
                </h2>
          </div>
         )
    }
}
 
export default Home;