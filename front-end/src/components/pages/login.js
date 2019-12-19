import React from 'react';
import 'antd/dist/antd.css';
import '../../style/login.css';
import { Form, Icon, Input, Button } from 'antd';
import GoogleButton from 'react-google-button';



class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      password: "",
      username: ""
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = { password:this.state.password, username:this.state.username }

        fetch('http://localhost:3000/api/v1.0/users/login', { 
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
    }).then((res) => {
      res.json()
      console.log(res.status)
      if (res.status === 201){
        this.props.history.push('/account')
    }
    
    })  
  };

  



    render() {


      const { getFieldDecorator } = this.props.form;
      
        return (
          <div className="form">
            <Form onSubmit={this.handleSubmit} className="login-form">
            <h2 style={{textAlign: 'center'}}>Login</h2>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules:[{
                    required: true, message: "Please input username"
                  }],
                })(
                  <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  name = "username"
                  onChange={this.handleChange} 
                />,
                )}
              </Form.Item>

              <Form.Item hasFeedback>
                {getFieldDecorator('password', {
                  rules:[{
                    required: true, message: "Please input password"
                  },
                  {
                    min: 6, message: "Password should be more than 8 characters long"
                  }],
                })(
                  <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange} 
                />,
                )}
              </Form.Item>

              <Form.Item>
                <a className="login-form-forgot" href="/forgotPassword">
                  Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
              <Form.Item>
                <GoogleButton style={{width: 500}}/>
              </Form.Item>
              <Form.Item>
                
              </Form.Item>
              <Form.Item>
               
              </Form.Item>
                <div></div>
                Or <a href="/register">register now!</a>
          </Form>

          </div>
        );

    }
}


const Login = Form.create({ name: 'login' })(LoginForm); 
 

export default Login;
