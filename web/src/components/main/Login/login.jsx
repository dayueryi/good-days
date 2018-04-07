import React, { Component } from "react";
import "./login.scss";
import myajax from "@/tool/myajax.js";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;
const Search = Input.Search;
class NormalLoginForm extends Component {
  state = {
    code: "",
    flag: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  getCode() {
    console.log(this.refs.phoneNum.props.children.props["data-__field"].value);
    //this.refs.phoneNum.props.children.props.data-__field.value
    var phonenum = this.refs.phoneNum.props.children.props["data-__field"]
      .value;
      if(phonenum.length!=11){
        alert("输入正确的手机号")
        return 
      }
    /* this.setState({
      flag:true
    },()=>{
      var count = 60;
      var timer = setInterval(function(){
        count--;
        console.log("count")
        this.refs.countdown.innerText = `剩余${count}秒`
        if(count<=0){
          clearInterval(timer)
          this.setState({
            flag:false
          })
        }
      }.bind(this),1000)
      console.log(this.refs.countdown.innerText)
    }) */

    myajax.fetch({
      url: "http://localhost:4000/api/users/getcode?phonenum=" + phonenum,
      option: {},
      success: data => {
        this.setState(
          {
            code: data,
            flag: true
          },
          () => {
            var count = 60;
            var timer = setInterval(
              function() {
                count--;
                console.log("count");
                this.refs.countdown.innerText = `剩余${count}秒`;
                if (count <= 0) {
                  clearInterval(timer);
                  this.setState({
                    flag: false
                  });
                }
              }.bind(this),
              1000
            );
            console.log(this.refs.countdown.innerText);
          }
        );
      }
    });
  }
  toLogin() {
    // console.log(this)
    // console.log(this.refs.code.props.children.props["data-__field"].value)
    // console.log(this.state.code,"code")
    if (
      this.refs.code.props.children.props["data-__field"].value ==
      this.state.code
    ) {
      alert("login success");
      localStorage.setItem(
        "isLogin",
        this.refs.phoneNum.props.children.props["data-__field"].value
      );
      window.location.reload();
    } else {
      alert("try again");
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    var str = "";
    if (this.state.flag) {
      str = (
        <div className="w-timer" ref="countdown">
          剩余60秒
        </div>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit} className="login-form w-login">
        <FormItem ref="phoneNum">
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "请输入手机号" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="手机号"
            />
          )}
        </FormItem>
        <FormItem ref="code">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入验证码!" }]
          })(
            <Search
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              enterButton="获取验证码"
              size="large"
              onSearch={this.getCode.bind(this)}
              placeholder="请输入验证码"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.toLogin.bind(this)}
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
        {str}
      </Form>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;
