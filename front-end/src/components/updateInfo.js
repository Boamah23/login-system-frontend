import React from "react";
import "antd/dist/antd.css";
import "../style/account.css";
import {
  Input,
  Form,
  Button,
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
  

class UpdateInfo extends React.Component{

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      about: "",
      email: "",
      countryID: "",
      profileImageURL: ""
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = { firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, countryID:this.state.countryID, profileImageURL:this.state.profileImageURL }
        fetch('http://localhost:3000/api/v1.0/users/updateAccount', { 
          method: 'PUT',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
    }).then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response))
};
  render(){
    return(
    <div className="account-form">
    <Form onSubmit={this.handleSubmit}>
        <h1 style={{textAlign: 'center'}}>Update account information</h1>
    <Form.Item>
        <Avatar size={64} icon="user" />
        <Button
        size="small"
        style={{ marginLeft: 20, verticalAlign: "middle" }}
        >Change profile picture</Button>
    </Form.Item>
    <Form.Item >           
          <Input name="firstName" placeholder="Enter first name" onChange={this.handleChange}/>
    </Form.Item>

    <Form.Item >           
          <Input name="lastName" placeholder="Enter last name" onChange={this.handleChange}/>
    </Form.Item>
    
    <Form.Item>
        <Input name="email" prefix={<Icon type="mail" style={{color: "grey"}} />} placeholder="Enter email" onChange={this.handleChange}/>
    </Form.Item>

    <Form.Item>
        <Upload {...props}>
        <Button>
            <Icon name="profileImageURL" type="upload" onChange={this.handleChange}/> Upload Profile Image
        </Button>
        </Upload>
    </Form.Item>

    <Form.Item>
        <Input name="about" placeholder="About yourself...." onChange={this.handleChange}/>
    </Form.Item>

    <Form.Item>
        <Input name="countryID" prefix={<Icon type="global" style={{color: "grey"}} />} placeholder="Country" onChange={this.handleChange}/>
    </Form.Item>

        <Form.Item>
          <Button className="update-btn" type="primary" htmlType="submit">
            Update account information
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
    }
}

export default UpdateInfo;