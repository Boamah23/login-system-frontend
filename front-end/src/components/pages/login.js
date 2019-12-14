import React from 'react';
import 'antd/dist/antd.css';
import '../../style/login.css';
import { Form, Icon, Input, Button, Alert } from 'antd';

class LoginForm extends React.Component {

  state = {
    confirmDirty: false,
    addedSucessfully: false,
    showSuccess: false,
    showError: false,
    errorCode: 400,
    responseStatus: "nothing",
    errorMessage: "",
    isDeleted: false 
  };
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        fetch('http://localhost:3000/api/v1.0/users/login', { 
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({values})
    }).then(res => {
      if(res.ok)
        this.setState({addedSucessfully:true})
      else 
        this.setState({ 
          addedSucessfully:false,
          errorCode: res.status 
        });
        return res.json()
    }).then(data => this.checkResponse(data))
  }
}); 
};

handleUsername = () => {
  this.setState({responseStatus: "nothing"})
}

handleConfirmBlur = e => {
  const {value} = e.target;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value }); 
};

checkResponse = (data) => {
  if(this.state.loginSuccessfully){
    this.props.form.resetFields();
    this.setState({
      errorMessage: data.message,
      showSuccess: false,
      showError: true,
      responseStatus: "Error",
      isDeleted: true
    });
  }
}


    render() {

      const { getFieldDecorator } = this.props.form;
      
        return (
          <div className="form">
            <Form onSubmit={this.handleSubmit} className="login-form">
              
              <Form.Item hasFeedback validateStatus={this.state.responseStatus} help={this.state.errorMessage}>
                {getFieldDecorator('username', {
                  rules:[{
                    required: true, message: "Please input username"
                  }],
                })(
                  <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  onChange={this.handleUsername} 
                />,
                )}
              </Form.Item>

              <Form.Item hasFeedback>
                {getFieldDecorator('password', {
                  rules:[{
                    required: true, message: "Please input password"
                  },
                  {
                    min: 8, message: "Password should be more than 8 characters long"
                  }],
                })(
                  <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  onBlur={this.handleConfirmBlur}
                />,
                )}
              </Form.Item>

              <Form.Item>
                <a className="login-form-forgot" href="/forgotPass">
                  Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="/">register now!</a>
              </Form.Item>
              {this.state.isDeleted ? <Alert message="This is an error message" type="error"/>  :null}
              {this.state.showSuccess ? <Alert message="account logged successfully" type="success" /> :null}
              {this.state.showError ? <Alert message={this.state.errorMessage} type="error" /> :null} 
          </Form>
          </div>
        );

    }
}


const Login = Form.create({ name: 'login' })(LoginForm); 
 

export default Login;
