import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

function passwordReset(){
    return(
        <div className="account-form">
        <Form>
            <h1 style={{textAlign: 'center'}}>Reset Password</h1>
            <FormItem>
                    <Input placeholder="Enter Email" prefix={<Icon type="mail" style={{color: "grey"}}/>}/>
            </FormItem>

            <FormItem>
                    <Input.Password placeholder="New Password" prefix={<Icon type="lock" style={{color: "grey"}}/>}/>
            </FormItem>

            <FormItem>
                    <Input.Password placeholder="Confirm Password" prefix={<Icon type="mail" style={{color: "grey"}}/>}/>
            </FormItem>

            <Form.Item>
                <Button className="update-btn" type="primary" htmlType="submit">
                    Update Password
                </Button>
            </Form.Item>
        </Form>

    </div>

    );

}

export default passwordReset;