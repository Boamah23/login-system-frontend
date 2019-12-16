import React from "react";
import "antd/dist/antd.css";
import "../index.css";

import {
  Input,
  Form,
  Button,
  Icon
} from "antd";

function deleteAccount() {
    return (
        <div className="account-form">
        <Form>
            <h1 style = {{textAlign: "center"}}>Delete Account</h1>
            <Form.Item>
                <Input  prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" />
            </Form.Item>
            <Form.Item>
                <Button className="update-btn" type="primary" htmlType="submit">
                    Delete Account
                </Button>
            </Form.Item>
        </Form>
        </div>

    );

}

export default deleteAccount;