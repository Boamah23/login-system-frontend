import React from "react";
import "antd/dist/antd.css";
import "../../style/forgot.css";
import { Form, Icon, Input, Button} from "antd";
import FormItem from "antd/lib/form/FormItem";


class ForgotPass extends React.Component {

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

            <div className="forgot">
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="forgot-form">
                    <h1 style={{textAlign: 'center'}}>Forgot Password</h1>
                    <FormItem hasFeedback>
                        {getFieldDecorator('Email', {
                            rules: [{ require: true, message: 'Please input email'}]
                        })(
                            <Input placeholder="Enter Email" prefix={<Icon type="mail" style={{color: "grey"}}/>}/>
                        )}
                    </FormItem>

                    <Form.Item {...tailFormItemLayout} className="register-btn">
                        <Button type="primary" htmlType="submit">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        );

    }
}

const Forgot = Form.create({ name: 'forgot' })(ForgotPass); 
  
export default Forgot;