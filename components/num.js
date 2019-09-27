import React, { Component } from 'react'
import store from "../store"
import {NUM_ADD_ACTION} from "../actions/actioncreator"
export default class Num extends Component {
    constructor(){
        super()
        this.state = store.getState().num;

        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {n} = this.state;
        return (
            <div>
                <h2>{n}</h2>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
    handleAdd(){
        store.dispatch(NUM_ADD_ACTION)
    }
    handleUpdate(){
        this.setState(store.getState().num);
    }
}
