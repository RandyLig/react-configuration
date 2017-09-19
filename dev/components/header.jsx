import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { Button, Dropdown, Menu, Icon } from 'antd'
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
export default class Header extends React.Component {
    render() {
        return <div className="topbar">
            <Icon type="left-circle" style={{"fontSize":"18px","color":"#fff"}} className="topbar-left-circle"></Icon>
            <Icon type={this.props.icon} style={{"fontSize":"18px","color":"#fff"}} className="topbar-car"></Icon>
            <span>{this.props.topbarText}</span>
        </div>;
    }
}
