import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { Button,Dropdown,Menu,Icon } from 'antd'
import MyTrack from './components/myTrack.jsx'
require ("../dist/css/style.css")
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件


class Entry extends React.Component {
    
    render() {
        return <div>
        <MyTrack></MyTrack>
        </div>;
    }
}
render(<Entry />, document.getElementById('app'));