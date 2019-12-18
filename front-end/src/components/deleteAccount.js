import React from "react";
import "antd/dist/antd.css";
import "../index.css";

import {
  Input,
  Form,
  Button,
  Icon
} from "antd";

class DeleteAccount extends React.Component {

    constructor() {
        super();
        this.state = {
          email: ""
        };
      }
    
      handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const data = { email:this.state.email }
    
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
    return (
        <div className="account-form">
        <Form onSubmit={this.handleSubmit}>
            <h1 style = {{textAlign: "center"}}>Delete Account</h1>
            <Form.Item>
                <Input  prefix={<Icon name="email" type="mail" style={{color: "grey"}} />} placeholder="Enter email" onChange={this.handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button className="update-btn" type="primary" htmlType="submit">
                    Delete Account
                </Button>
            </Form.Item>
        </Form>
        </div>

    );

    }

}

export default DeleteAccount;