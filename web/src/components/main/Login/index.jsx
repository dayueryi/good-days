import React, { Component } from "react";
import "./index.scss";
import myajax from "@/tool/myajax.js";
import store from '@/store/index.js';
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;
const Search = Input.Search;
class LoginForm extends Component {
  state = {
   code:"",
   isLogin:false
  };
    return (
        
    );
  }
const Login = Form.create()(LoginForm);
export default Login;
