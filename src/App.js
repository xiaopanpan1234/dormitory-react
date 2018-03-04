/**
 * author:limingyang
 * 本文件主要是提供界面的路由
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store'
import Login from './Login/containers/Login.js'
import Header from './_platform/layout/Header'
import Home from './Home/containers/Home'
// 动态标签页组件
import DynamicTabs from './_platform/layout/DynamicTabs'
import Overall from './Overall'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div style={{ "height": "100%" }}>
                        <Route path="/:module?" component={Header} />
                        <Route path="/:module?" component={DynamicTabs} />
                        {Login && <Route exact={true} path="/" component={Login} />}
                        {Home && <Route path="/home" component={Home} />}
                        {Overall && <Route path="/overall" component={Overall} />}
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;