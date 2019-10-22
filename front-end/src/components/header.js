import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';


function header(){
    return(
        <PageHeader
            style={{color: 'green'}}
            title = 'Login activity project'
        />
    );
}

export default header;