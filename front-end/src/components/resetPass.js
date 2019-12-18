import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

class PasswordReset extends React.Component{

    constructor() {
        super();
        this.state = {
          password: "",
          email: ""
        };
      }
    
      handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const data = { password:this.state.password, email:this.state.email }
    
            fetch('http://localhost:3000/api/v1.0/users/passwordReset', { 
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
    return(
        <div className="account-form">
        <Form onChange={this.handleSubmit}>
            <h1 style={{textAlign: 'center'}}>Reset Password</h1>
            <FormItem>
                    <Input name="email" placeholder="Enter Email" prefix={<Icon type="mail" style={{color: "grey"}}/>} onChange={this.handleChange}/>
            </FormItem>

            <FormItem>
                    <Input.Password name="password" placeholder="New Password" prefix={<Icon type="lock" style={{color: "grey"}}/>} onChange={this.handleChange} />
            </FormItem>

            <Form.Item>
                <Button className="update-btn" type="primary" htmlType="submit">
                    Update Password
                </Button>
            </Form.Item>
        </Form>

    </div>

    );

    }

}

export default PasswordReset;