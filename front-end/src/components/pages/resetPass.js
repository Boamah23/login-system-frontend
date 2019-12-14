import React from "react";
import "antd/dist/antd.css";
import "../../style/forgot.css";
import { Form, Icon, Input, Button,} from "antd";
import FormItem from "antd/lib/form/FormItem";


class ResetPass extends React.Component {

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }; 

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }; 

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
                    <h2 style={{textAlign: 'center'}}>Reset Password</h2>

                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                { require: true, message: 'Please input password'},
                                {min: 8, message: 'password should be at least 8 characters long!'},
                                {validator: this.validateToNextPassword}
                            ]  
                        })(
                            <Input.Password placeholder="New Password" prefix={<Icon type="lock" style={{color: "grey"}}/>}/>
                        )}
                    </FormItem>

                    <FormItem hasFeedback>
                        {getFieldDecorator('passwordConfirmation', {
                            rules: [
                                { require: true, message: 'Please input password confirmation'},
                                {validator: this.compareToFirstPassword}
                            ]
                        })(
                            <Input.Password onBlur={this.handleConfirmBlur} placeholder="Confirm Password" prefix={<Icon type="mail" style={{color: "grey"}}/>}/>
                        )}
                    </FormItem>

                    <Form.Item {...tailFormItemLayout} className="register-btn">
                        <Button type="primary" htmlType="submit">
                            Update Password
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        );

    }
}

const Reset = Form.create({ name: 'reset' })(ResetPass); 
  
export default Reset;