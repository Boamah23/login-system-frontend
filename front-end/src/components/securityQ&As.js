import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Row, Col } from "antd";

class SecurityQuestions extends React.Component{

    constructor() {
        super();
        this.state = {
            email: "",
            securityQuestion1: "",
            securityAnswer1: "",
            securityQuestion2: "",
            securityAnswer2: ""
        };
      }
    
      handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const data = { securityQuestion1:this.state.securityQuestion1, securityAnswer1:this.state.securityAnswer1, securityQuestion2:this.state.securityQuestion2, securityAnswer2:this.state.securityAnswer2, email:this.state.email}
    
            fetch('http://localhost:3000/api/v1.0/users/securityQuestions', { 
              method: 'POST',
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
            <h1 style={{textAlign: 'center'}}>Security Questions</h1>
            <Form.Item>
                <Input  prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" name="email"  onChange={this.handleChange}/>
            </Form.Item>
            <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                  <Input name="securityQuestion1" placeholder="Security question 1" onChange={this.handleChange}/>
              </Col>
              <Col span={12}>
                  <Input name="securityAnswer1" placeholder="Security answer 1" onChange={this.handleChange}/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                    <Input name="securityQuestion2" placeholder="Security question 2" onChange={this.handleChange}/>
              </Col>
              <Col span={12}>
                  <Input name="securityAnswer2" placeholder="Security answer 2" onChange={this.handleChange}/>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
                <Button className="update-btn" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    </div>

    );

    }

}

export default SecurityQuestions;