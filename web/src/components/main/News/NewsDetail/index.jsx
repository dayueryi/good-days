import React, { Component } from 'react';
import myajax from "@/tool/myajax"
import './index.scss';
import store from "@/store/index.js"
import Footer from './../../Footer/index.jsx';
import banner from "@/img/xinwen_tit.png";
class Home extends Component {
    state = {
        detaillist:{
            detail:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.newsID)
        var newsID = this.props.match.params.newsID;
        myajax.fetch({
            url:"http://localhost:4000/api/news?newsID="+newsID,
            option:{},
            success:(data)=>{
                console.log(data[0])
                this.setState(
                   { detaillist:data[0]}
                )
            }
        })
    }
    render() { 
        
     return  (
        <div className="box">
        <div className="x-content bg_center">
          <div className="w_newsdetail">
            <h1 className="news_banner">
              <img src={banner} alt="" />
            </h1>
            <h2>
                {this.state.detaillist.newsName}
            </h2>
            <ul>
                {
                    this.state.detaillist.detail.map((item,index)=>{
                        return(
                            <li key={index}>
                                <p>{item.text}</p>
                                <img src={item.img} alt=""/>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
          <Footer/>
        </div>
      </div>
          
         )
         
         
    }
}
 
export default Home;