import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import {
  Input,
  Form,
  Button,
  DatePicker,
  Icon,
  Upload,
  message,
  Avatar
} from "antd";

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

function random(){
    return(
    <Form>
        <h1 style={{textAlign: 'center'}}>Update account information</h1>
    <Form.Item>
        <Avatar size={64} icon="user" />
        <Button
        size="small"
        style={{ marginLeft: 20, verticalAlign: "middle" }}
        >Change profile picture</Button>
    </Form.Item>
    <Form.Item >           
          <Input placeholder="Enter first name" />
    </Form.Item>

    <Form.Item >           
          <Input placeholder="Enter last name" />
    </Form.Item>
    
    <Form.Item>
        <DatePicker placeholder="select date of birth"/>
  </Form.Item>

    
    <Form.Item>
        <Input prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" />
    </Form.Item>

    <Form.Item>
        <Upload {...props}>
        <Button>
            <Icon type="upload" /> Upload Profile Image
        </Button>
        </Upload>
    </Form.Item>

    <Form.Item>
        <Input prefix={<Icon type="global" style={{color: "grey"}} />} placeholder="Country"/>
    </Form.Item>

    <Form.Item hasFeedback>
        <Input prefix={<Icon type="user" style={{ color: "grey" }} />} placeholder="Username"/>
    </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update account information
          </Button>
        </Form.Item>
      </Form>
    );
}

export default random;