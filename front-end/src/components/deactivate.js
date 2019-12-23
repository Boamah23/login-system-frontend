import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import {
  Input,
  Form,
  Button,
  Icon,
  message
} from "antd";

class Deactivate extends React.Component {
    
    constructor() {
        super();
        this.state = {
          email: "",
          password: ""
        };
      }
    
      handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const data = { email:this.state.email, password:this.state.password }
    
            fetch('http://localhost:3000/api/v1.0/users/deactivateAccount', { 
              method: 'PUT',
              headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response))
      };

      render() {

        const success = () => {
          message.success('This account has been deactivated');
        };

    return (
        <div className="account-form">
        <Form onSubmit={this.handleSubmit}>
            <h1 style = {{textAlign: "center"}}>Deactivate</h1>
            <Form.Item>
                <Input  prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" name="email"  onChange={this.handleChange}/>
            </Form.Item>
            <Form.Item>
                <Input  prefix={<Icon type="lock" style={{color: "grey"}} />} placeholder="Enter password" name="password"  onChange={this.handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button className="update-btn" type="primary" onClick={success} htmlType="submit">
                    Deactivate Account
                </Button>
            </Form.Item>
        </Form>
        </div>

    );

      }

}

export default Deactivate;