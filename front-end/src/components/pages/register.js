import React from "react";
import "antd/dist/antd.css";
import "../style/register.css";
import { Form, Icon, Input, Button, Upload } from "antd";
import { DatePicker } from "antd";
import moment from "moment";


const dateFormat = "DD/MM/YYYY";

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
  }
};

function Register() {

return (
  <div className="register">
    <div className="title">Register</div>
    <Form className="register-form">
      <Form.Item>
        <Input placeholder="First name" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Last name" />
      </Form.Item>
      <Form.Item>
        <div>
        <div><h4>Date of birth:</h4></div>
          <DatePicker
            placeholder="Date of birth"
            defaultValue={moment("01/01/2019", dateFormat)}
            Format={dateFormat}
          />
        </div>
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="mail" style={{ color: "grey" }} />}
          placeholder="Email"
        />
      </Form.Item>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "grey" }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "grey" }} />}
          placeholder="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="register-btn">
          Register
        </Button>
        <Button type="link" className="btn">
          Already have an account? Login
        </Button>
      </Form.Item>
    </Form>
  </div>
);

}
  
  export default Register;