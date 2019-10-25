import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../style/login.css';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';


function Login(props) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="form">
            <Form className="login-form">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: "grey" }} />}
                        placeholder="Username"
                        onChange={e => setUser(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: "grey" }} />}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPass(e.target.value)}
                    />
                </Form.Item>
                <Link to="">
                    <Button type="link" className="login-form-forgot">
                        Forgot password?
                    </Button>
                </Link>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={submitLog}>
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

    async function submitLog(event) {
        event.preventDefault();
        const request = `{"user": "${user}", "pass": "${pass}"}`
        fetch("api/v1.0/users/", {
            method: "POST",
            body: request,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                props.history.push("/")
            }

            )
    }  
      
      
      
      

}

 

export default Login;
