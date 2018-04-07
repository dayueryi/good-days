import React, { Component } from 'react';
import Footerlist from './../Footer/index.jsx';
import './index.scss';
import store from "@/store/index.js"
import {Link} from 'react-router-dom'
import ActiveDetail from './ActiveDetail/index.jsx'
import Active from '@/api/active.js'

class Home extends Component {
    state={
        imglist:[],
        bannerlist:'',
    }
    componentDidMount(){
       
        Active.active((data)=>{
        this.setState({
            imglist: data
          })
     }),
     Active.activebanner((data)=>{
        this.setState({
            bannerlist: data[0]
          },()=>{
               
          })
     })
     
    }
    

    clickDate(){
        store.dispatch({
            type:"addList",
            data:"2"
        })
        console.log(store.getState().todolist)
    }
    render() { 
        
     return  (
              <div className = "box">
                <div className="x-content">
             
               
                    <div className="banner">
                    <div className="box"></div>
                        <img src={this.state.bannerlist.banner} alt=""/>
               
                    </div>
                    <div className="fenjie">
                        <img src={this.state.bannerlist.fenjie} alt=""/>
                    </div>
                    <div className="activity">
                    { this.state.imglist.map((item, index) => {
                          return(
                        <div className="zhanshi" key={index}>
                            <Link to={"/activedetail/"+item.activeID} className="a">
                            <div className="pic">
                                <div className="box"></div>
                                <img src={item.activeAddress} alt=""/>
                            </div>
                            </Link>
                            <div className="pictxt">
                                <h3>{item.activetxt1}</h3>
                                <h2>{item.activetxt2}</h2>    
                                <p>{item.activetxt3}</p>
                            </div>
                        </div>
                             )})} 
                    </div>

         

                </div>
              </div>
          
         )
         
         
    }
}
 
export default Home;