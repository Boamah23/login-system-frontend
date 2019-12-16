import React from "react";
import "antd/dist/antd.css";
import "../../index.css";
import personalInfo from "../personalInfo";
import updateInfo from "../updateInfo";
import resetPass from "../resetPass"
import deactivate from "../deactivate"
import deleteAcc from "../deleteAccount"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Form
} from "antd";

class AccountInfo extends React.Component {
  render() {
    const { Content, Sider } = Layout;

    return (
      <Router>
      <Layout>
        <h2 style={{textAlign: 'left'}}>Account Information</h2>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1"><Link to="/personalInfo" />Personal Information</Menu.Item>
              <Menu.Item key="2"><Link to="/updateInfo" />Update Information</Menu.Item>
              <Menu.Item key="3"><Link to="/resetPass" />Reset Password</Menu.Item>
              <Menu.Item key="4"><Link to="/deactivate" />Deactivate</Menu.Item>
              <Menu.Item key="5"><Link to="/deleteAcc" />Delete Account</Menu.Item>
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
              <Route exact path="/personalInfo" component={personalInfo} />
              <Route exact path="/updateInfo" component={updateInfo} />
              <Route exact path="/resetPass" component={resetPass} />
              <Route exact path="/deactivate" component={deactivate} />
              <Route exact path="/deleteAcc" component={deleteAcc} />

            </Content>
          </Layout>
        </Layout>
      </Layout>
      </Router>
    );
  }
}


const Account = Form.create({ name: 'account' })(AccountInfo); 
  
export default Account;