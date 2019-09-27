import React, { Component } from 'react'
import store from "../store"
export default class List extends Component {
    constructor(){
        super()
        this.state = store.getState().todo;


        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {list} = this.state;
        return (
            <ul>
               {
                   list.map((item,index)=>(
                        <li key={index}>{item}</li>
                   ))
               }
            </ul>
        )
    }
    handleUpdate(){
        this.setState(store.getState().todo)
    }
}
