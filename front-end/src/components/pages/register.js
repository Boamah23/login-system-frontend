import React from "react";
import "antd/dist/antd.css";
import "../../style/register.css";
import { Form, Icon, Input, Button } from "antd";
import { DatePicker } from "antd";
import moment from "moment";


const dateFormat = "DD/MM/YYYY";

function Register() {

return (
  <div className="register">
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