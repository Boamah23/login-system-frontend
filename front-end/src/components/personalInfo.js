import React, { Component } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Descriptions } from "antd";

class PersonalInfo extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {

    fetch('http://localhost:3000/api/v1.0/users/getInfo')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
      })
    }); 
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded){
      return <div>...Loading</div>
    }else {
    return(
      <Descriptions
        title="Personal Information"
        bordered
        column={{ md: 1, sm: 1, xs: 1 }}
      >
          {items.map((item) => 
            <Descriptions.Item label="First name">{item.firstName}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="Last name">{item.lastName}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="Username">{item.username}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="profile Image URL">{item.profileImageURL}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="email">{item.email}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="about">{item.about}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="countryID">{item.countryID}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="birthDate">{item.birthDate}</Descriptions.Item>
            )};
          {items.map((item) => 
            <Descriptions.Item label="dateRegistered">{item.dateRegistered}</Descriptions.Item>
            )};
      </Descriptions>
    );
  }
}

}

export default PersonalInfo;