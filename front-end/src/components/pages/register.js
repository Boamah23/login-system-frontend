import React from "react";
import "antd/dist/antd.css";
import "../../style/register.css";
import { Form, Icon, Input, Button, message, Upload,  Row, Col, Select } from "antd";
import { DatePicker } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class RegisterForm extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      countryID: "",
      profileImageURL: "",
      password: "",
      username: "",
      birthDate: new Date()
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  thisonChange = date => this.setState({birthDate: date})

  handleSubmit = e => {
    e.preventDefault();
    const data = { firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, countryID:this.state.countryID, profileImageURL:this.state.profileImageURL, password:this.state.password, username:this.state.username, birthDate:this.state.birthDate  }
    fetch('http://localhost:3000/api/v1.0/users/register', { 
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

    const { getFieldDecorator } = this.props.form;


    return (

      <div className="register">
        <Form onSubmit={this.handleSubmit} className="register-form">
        <h2 style={{textAlign: 'center'}}>Register</h2>
          <Form.Item >
            {getFieldDecorator('First Name', {
              rules: [{ required: true, message: 'Please input first name!' }],
            })(            
                <Input name="firstName" placeholder="Enter first name" onChange={this.handleChange}/>
            )}
          </Form.Item>

          <Form.Item >
            {getFieldDecorator('Last Name', {
              rules: [{ required: true, message: 'Please input last name!' }],
            })(            
                <Input name="lastName" placeholder="Enter last name" onChange={this.handleChange}/>
            )}
          </Form.Item>
          
          <Form.Item > 
            <DatePicker  onChange={this.thisonChange}/>
          </Form.Item >


          
          <Form.Item hasFeedback >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                }],
            })(<Input name="email" prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email"  onChange={this.handleChange}/>)}
          </Form.Item>

          <Form.Item>
          <Upload {...props}>
            <Button name="profileImageURL" onChange={this.handleChange}>
              <Icon type="upload"/> Upload Profile Image
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('country', {
            rules: [
              { 
                required: true, 
                message: 'Please input last name!'
              }],
          })(<Input name="countryID" prefix={<Icon type="global" style={{color: "grey"}} />} placeholder="Country" onChange={this.handleChange}/>)}
        </Form.Item>

        <Form.Item hasFeedback>
          {getFieldDecorator('username', {
              rules: [
                { 
                  required: true, 
                  message: 'Please input username!'
                }],
            })(<Input name="username" prefix={<Icon type="user" style={{ color: "grey" }} />} placeholder="Username" onChange={this.handleChange}/>)}
        </Form.Item>
          
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                }],
            })(<Input.Password name="password" placeholder="password" prefix={<Icon type="lock" style={{ color: "grey"}}/>} onChange={this.handleChange}/>)}
          </Form.Item>

          <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                  <Select defaultValue="Security Question 1" >
                      <Option value="Mothers maiden name">Mothers maiden name</Option>
                      <Option value="Model of first car">Model of first car</Option>
                      <Option value="Favouite movie">Favouite movie</Option>
                      <Option value="Road you grew up on">Road you grew up on</Option>
                  </Select>
              </Col>
              <Col span={12}>
                  <Input placeholder="Security answer 1"/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                  <Select defaultValue="Security Question 2" >
                      <Option value="Name of primary school">Name of primary school</Option>
                      <Option value="Place of birth">Place of birth</Option>
                      <Option value="Favourite colour">Favourite colour</Option>
                      <Option value="Favourite book">Favourite book</Option>
                  </Select>
              </Col>
              <Col span={12}>
                  <Input placeholder="Security answer 2"/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input placeholder="Captcha" />)}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item className="register-btn">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

  const Register = Form.create({ name: 'register' })(RegisterForm); 
  
  export default Register;