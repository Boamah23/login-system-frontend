import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import {
  Input,
  Form,
  Button,
  Icon
} from "antd";

function deactivate() {
    return (
        <Form>
            <h1 style = {{textAlign: "center"}}>Deactivate</h1>
            <Form.Item>
                <Input  prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Deactivate Account
                </Button>
            </Form.Item>
        </Form>

    );

}

export default deactivate;