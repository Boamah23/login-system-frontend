import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import {
  Input,
  Form,
  Button,
  DatePicker,
} from "antd";

function personalInfo(){
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
    return(
        <Form {...formItemLayout}>
            <h1 style={{textAlign: 'center'}}>Personal information</h1>
       
        <Form.Item>
        <Input />
        </Form.Item>

        <Form.Item>
         <Input />
        </Form.Item>

        <Form.Item>
         <Input />
        </Form.Item>

        <Form.Item>
         <Input />
        </Form.Item>

        <Form.Item>
          <DatePicker placeholder="select date of birth" />
        </Form.Item>

        <Form.Item>
          <Input/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update account information
          </Button>
        </Form.Item>
      </Form>
    );
}

export default personalInfo;