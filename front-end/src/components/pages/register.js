import React from "react";
import "antd/dist/antd.css";
import "../../style/register.css";
import { Form, Icon, Input, Button, message, Upload,  Row, Col } from "antd";
import { DatePicker } from "antd";


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

  state = {
    confirmDirty: false,
    addedSucessfully: false,
    showSuccess: false,
    showError: false,
    errorCode: 400,
    responseStatus: "nothing",
    errorMessage: "" 
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        fetch('http://localhost:3000/api/v1.0/users', { 
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

handleEmail = ()=> {
  this.setState({responseStatus:"nothing"})
}; 


  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkResponse = (data) => {
      if(this.state.addedSucessfully){
        this.props.form.resetFields();
        this.setState({
          showSuccess:true,
          showError : false
      });
    }
    else{
        this.setState({
        errorMessage: data.message,
        showSuccess:false,
        showError : true,
        responseStatus: "error"
    });
  }

}

  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (

      <div className="register">
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">

          <Form.Item >
            {getFieldDecorator('First Name', {
              rules: [{ required: true, message: 'Please input first name!' }],
            })(            
                <Input placeholder="Enter first name" />
            )}
          </Form.Item>

          <Form.Item >
            {getFieldDecorator('Last Name', {
              rules: [{ required: true, message: 'Please input last name!' }],
            })(            
                <Input placeholder="Enter last name" />
            )}
          </Form.Item>
          
          <Form.Item hasFeedback>
            {getFieldDecorator('date-picker',{
              rules: [
                { 
                  type: 'object', 
                  required: true, 
                  message: 'Please select time!' 
                }],
            })(<DatePicker placeholder="select date of birth"/>)}
        </Form.Item>

          
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
            })(<Input prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" />)}
          </Form.Item>

          <Form.Item>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload Profile Image
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
          })(<Input prefix={<Icon type="global" style={{color: "grey"}} />} placeholder="Country"/>)}
        </Form.Item>

        <Form.Item hasFeedback>
          {getFieldDecorator('username', {
              rules: [
                { 
                  required: true, 
                  message: 'Please input username!'
                }],
            })(<Input prefix={<Icon type="user" style={{ color: "grey" }} />} placeholder="Username"/>)}
        </Form.Item>
          
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                }],
            })(<Input.Password placeholder="password" prefix={<Icon type="lock" style={{ color: "grey"}}/>}/>)}
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

          <Form.Item {...tailFormItemLayout} className="register-btn">
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