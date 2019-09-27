import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./reset.css";
ReactDOM.render(
    <App/>,
    document.getElementById("root"),
    ()=>{console.log("渲染成功")}
)
/*
    redux   公共状态管理

    1、为什么要学习redux
        ui组件 容器组件的拆分
        频繁的引入store
        每个组件都需要做监听 以及触发
                            --- react-redux


        无法管理多个store
                            ---combineReducers

    安装
     cnpm install redux -S


    安装 react-redux

    react-redux 用来辅助 redux  react-redux是不能单独使用的  需要配合redux一起使用



    react-redux是由2部分组成
        1、Provider组件  原理 context
        2、connect函数   原理 高阶组件



*/


