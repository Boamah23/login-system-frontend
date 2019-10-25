import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../style/header.css'
import { PageHeader } from 'antd';


function Header(){
    return(
        <PageHeader className="head" style={{marginBottom: 70}}
            title = 'Login activity project'
        />
    );
}

export default Header;