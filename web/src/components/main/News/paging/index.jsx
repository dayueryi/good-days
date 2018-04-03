import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./paging.scss"
class Paging extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allPageNum:0
         }
    }
    componentDidMount(){
        
        
    }
    render() { 
       
        function page(length){
            var res = [];
            for(var i = 0; i < length; i++) {
                var j = i+1
                res.push( <li key={i}>
                    < NavLink to={"/news/"+j} activeclass = "active">  
                         {i*1+1}
                         
                     </NavLink>      
                  </li>)
              }
              return res
        }
        return ( 
            <ul className="w_news_paging">
                {page(this.props.allPageNum)}
               
            </ul>
         )
    }
}
 
export default Paging;