import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.scss";
import banner01 from "@/img/banner01.jpg";
import banner02 from "@/img/banner02.jpg";
import banner03 from "@/img/banner03.jpg";
import banner04 from "@/img/banner04.jpg";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="Fs-box">
                      <div className="title">
                            <h2>最新旅拍客照</h2>
                            <h3>travel loveshow</h3>
                            <div className="line"></div>
                      </div>
                      <div className="target-bar">
                      <a>不看明星 不看模特 只看客照</a>
                      <a>拒绝千挑万选 每日客照接单</a>
                      </div>
                     
                      <div className="center">
          <div className="module-c-r major-list-outer">
            <ul className="major-list">
              <li className="major-item">
                <div className="box" />
                <a href="/annals/24338.html" target="_blank">
                  <span className="txt-hide front-face">
                    <img
                      className="img"
                      src="http://www.lyy99.com/uploads/2018/03/290935026043.jpg_293x450.jpg"
                      title="女装封面"
                    />{" "}
                  </span>
                  <span className="back-face to-right" />
                  <div className="wenzi">
                    <p>2018.03.21</p>
                    <p>YUANYE PHOTO WEDDING STUDIOS</p>
                    <p>景点：厦门 鼓浪屿</p>
                  </div>
                </a>
              </li>
              <li className="major-item">
                <div className="box" />
                <a href="/annals/10293.html" target="_blank">
                  <span className="txt-hide front-face">
                    <img
                      src="http://www.lyy99.com/uploads/2018/03/290939578171.jpg_293x450.jpg"
                      title="大事件"
                    />
                  </span>
                  <span className="back-face to-right" />
                  <div className="wenzi">
                    <p>2018.03.21</p>
                    <p>YUANYE PHOTO WEDDING STUDIOS</p>
                    <p>景点：厦门 鼓浪屿</p>
                  </div>
                </a>
              </li>
             
              <li className="major-item">
                <div className="box" />
                <a href="/annals/24337.html" target="_blank">
                  <span className="txt-hide front-face">
                    <img
                      src="http://www.lyy99.com/uploads/2018/03/170946222361.jpg_293x450.jpg"
                      title="男装封面"
                    />
                  </span>
                  <span className="back-face to-right" />
                  <div className="wenzi">
                    <p>2018.03.21</p>
                    <p>YUANYE PHOTO WEDDING STUDIOS</p>
                    <p>景点：厦门 鼓浪屿</p>
                  </div>
                </a>
              </li>
              <li className="major-item">
                <div className="box" />
                <a href="/annals/24338.html" target="_blank">
                  <span className="txt-hide front-face">
                    <img
                      className="img"
                      src="http://www.lyy99.com/uploads/2018/03/290935026043.jpg_293x450.jpg"
                      title="女装封面"
                    />{" "}
                  </span>
                  <span className="back-face to-right" />
                  <div className="wenzi">
                    <p>2018.03.21</p>
                    <p>YUANYE PHOTO WEDDING STUDIOS</p>
                    <p>景点：厦门 鼓浪屿</p>
                  </div>
                </a>
              </li>
            </ul>
        
          </div>
        </div>
                            
             <div className="morebar"></div>
         </div>
      </div> 
       
    );
  }
  componentDidMount() {
    // var Swiper = window.Swiper;
  }
}

export default Home;
