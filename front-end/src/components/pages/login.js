import React from 'react';
import 'antd/dist/antd.css';
import '../../style/login.css';
import { Form, Icon, Input, Button} from 'antd';
import { Link } from 'react-router-dom';

  
 function Login() {
     return (
        <div className="form">
            <Form className="login-form">
                <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: "grey" }} />}
                    placeholder="Username"
                />
                </Form.Item>
        
                <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: "grey" }} />}
                    type="password"
                    placeholder="Password"
                />
                </Form.Item>
                <Link to="">
                    <Button type="link" className="login-form-forgot">
                    Forgot password?
                    </Button>
                </Link>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button>
                <Link to="/register">
                    <Button type="link" className="btn">
                        Register
                    </Button>
                </Link>
                </Form.Item>
        </Form>
        </div>
  );

 }
  
  
  export default Login;
