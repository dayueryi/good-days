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
                    {/* <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080055373.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080055211.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080056918.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080056717.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080056404.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080056688.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080519425.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080519771.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080520184.jpg" alt=""/>
                    <img src="http://www.only1314.com/uploadfile/2018/0331/20180331080521878.jpg" alt=""/> */}
                    {/* <Link to="">
                      <img src="http://www.only1314.com/uploadfile/2018/0331/20180331081035358.jpg" alt=""/>
                      <img src="http://www.only1314.com/uploadfile/2018/0331/20180331081035770.jpg" alt=""/>
                    </Link> */}
                     { 
                         this.state.imglist.map((item, index) => {
                          return(
                     <div key = { item.activeID }>
                        
                           <img src = { item.activeAddress } />   
                     
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
