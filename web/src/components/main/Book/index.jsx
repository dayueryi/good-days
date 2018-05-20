import React,{Component} from 'react';
import './index.scss';
import Login from "./../Login/login.jsx";
import CommitBook from "./CommitBook/index.jsx";
import myajax from "@/tool/myajax";
class Book extends Component{
    state={
        isLogin:true,
        list:[]
    }
    componentWillMount(){
        if(!localStorage.getItem('isLogin')){
            this.setState({
                isLogin:false
            })
        }
    }
    componentDidMount(){
       // console.log(this)
        var servicePriceID = this.props.location.pathname.split("/")[2]
         myajax.fetch({
            url:"http://localhost:4000/servicePrice/servicePriceApi?servicePriceID="+servicePriceID,
            option:{},
            success:(data)=>{
              //   console.log(data)
                 this.setState({
                    list: data
                 })     
          }
           })
    }
    render(){

        if(this.state.isLogin){
            return(
                <CommitBook
                Detail = {this.state.list}
                />
            )
        }else{

            return(
              <Login/>
            )
        }
    }
}
export default Book; 
