import React, { Component } from 'react';
import { Button,Rate } from 'antd';//只用了button


import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Rate />
            </div>
        );
    }
}

export default App;