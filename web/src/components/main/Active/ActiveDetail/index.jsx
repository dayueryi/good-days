import React,{Component} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import Active from '@/api/active.js'

class ActiveDetail extends Component{
    state = {
        imglist:[]
    }
    componentDidMount(){
       var activeID = this.props.location.pathname.split("/")[2]; 
       console.log(activeID) 
     Active.goodslist((data)=>{
        this.setState({
            imglist: data
          },()=>{
              console.log(data)
          })
     },activeID)
    }
    
    render(){
      
        return(

            <div className = "box">
                <div className="x-content">
                <div className="banner">
                     { 
                         this.state.imglist.map((item, index) => {
                          return(
                     <div key = { item.activeID }>
                        
                           <img src = { item.activeAddress } /> 
                           <img src={item.jietu2} alt=""/>
                           <Link to="/chat">
                           <img src={item.qianggou} alt=""/>
                           </Link>
                           <img src={item.qianggoucontent} alt=""/>
                           <Link to="/chat">
                           <img src={item.qianggou2} alt=""/>
                           </Link>
                           <img src={item.qianggou2content} alt=""/>
                           <Link to="/chat">
                           <img src={item.qianggou3} alt=""/>
                           </Link>
                           <img src={item.qianggou3content} alt=""/>
                           <Link to="/chat">
                           <img src={item.qianggou4} alt=""/>
                           </Link>
                           <img src={item.detail1} alt=""/>
                           <img src={item.detail2} alt=""/>
                           <Link to="/chat">
                           <img src={item.chat} alt=""/>
                           </Link>
                           
                           
                    </div>
                )
            })
            }
                </div>
                </div>
            </div>
        )
    
}

    }
export default ActiveDetail;
