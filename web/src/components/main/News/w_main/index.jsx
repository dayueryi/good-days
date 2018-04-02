import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import news01 from "@/img/news01.jpg";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        
    }
    render() { 
        return ( 
            <div className="w_main">
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
          </div>
         )
    }
}
 
export default Main;