import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Layout,
  Menu,
  Icon,
  Input,
  Form,
  Avatar,
  Button,
  DatePicker
} from "antd";

class AccountInfo extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { Content, Sider } = Layout;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Layout>
        <h1 style={{textAlign: 'center'}}>Account Information</h1>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1">Personal Information</Menu.Item>
              <Menu.Item key="2">Login & Password</Menu.Item>
              <Menu.Item key="3">Logout</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>

            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Form {...formItemLayout}>
                <Form.Item>
                  <Avatar size={64} icon="user" />
                  <Button
                    size="small"
                    style={{ marginLeft: 20, verticalAlign: "middle" }}
                  >Change profile picture</Button>
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("firstName", {
                    rules: [
                      { require: true, message: "Please input first name" }
                    ]
                  })(<Input />)}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("lastName", {
                    rules: [
                      { require: true, message: "Please input last name" }
                    ]
                  })(<Input />)}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("email", {
                    rules: [{ require: true, message: "Please input email" }]
                  })(<Input />)}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("country", {
                    rules: [
                      { require: true, message: "Please input first name" }
                    ]
                  })(<Input />)}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("date-picker", {
                    rules: [
                      {
                        type: "object",
                        required: true,
                        message: "Please select time!"
                      }
                    ]
                  })(<DatePicker placeholder="select date of birth" />)}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("birthdate", {
                    rules: [
                      { require: true, message: "Please input first name" }
                    ]
                  })(<Input/>)}
                </Form.Item>

                <Form.Item>
                    <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Update account information
                  </Button>
                </Form.Item>
              </Form>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


const Account = Form.create({ name: 'account' })(AccountInfo); 
  
export default Account;