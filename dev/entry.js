import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { Button } from 'antd'
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
class HelloMessage extends React.Component {

    render() {
        return <div><Button type="primary">Primary</Button>123 Hello World</div>;
    }
}
render(<HelloMessage />, document.getElementById('app'));