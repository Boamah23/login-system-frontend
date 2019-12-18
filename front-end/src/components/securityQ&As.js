import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Select, Row, Col } from "antd";

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

        const { Option } = Select;
    return(
        <div className="account-form">
        <Form onChange={this.handleSubmit}>
            <h1 style={{textAlign: 'center'}}>Reset Password</h1>
            <Form.Item>
                <Input  prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" name="email"  onChange={this.handleChange}/>
            </Form.Item>
            <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                  <Select name="securityQuestion1" defaultValue="Select security question 2" onChange={this.handleChange}>
                      
                      <Option name="securityQuestion1" value="Mothers maiden name">Mothers maiden name</Option>
                      <Option name="securityQuestion1" value="Model of first car">Model of first car</Option>
                      <Option name="securityQuestion1" value="Favouite movie">Favouite movie</Option>
                      <Option name="securityQuestion1" value="Road you grew up on">Road you grew up on</Option>
                  </Select>
              </Col>
              <Col span={12}>
                  <Input name="securityAnswer1" placeholder="Security answer 1" onChange={this.handleChange}/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                  <Select name="securityQuestion2" defaultValue="Select security question 2" onChange={this.handleChange}>
                      <Option name="securityQuestion2" value="Name of primary school">Name of primary school</Option>
                      <Option name="securityQuestion2" value="Place of birth">Place of birth</Option>
                      <Option name="securityQuestion2" value="Favourite colour">Favourite colour</Option>
                      <Option name="securityQuestion2" value="Favourite book">Favourite book</Option>
                  </Select>
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