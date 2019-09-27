import React, { Component ,Fragment} from 'react'
import store from "../store"
import {INPUT_CHANGE_ACTION,LIST_ADD_ACTION} from "../actions/actioncreator"
export default class Input extends Component {
    constructor(){
        super()
        this.state = store.getState().todo
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {inputVal} = this.state;
        return (
            <Fragment>
               <input type="text" value={inputVal} onChange={this.handleChange.bind(this)}/>
               <button onClick={this.handleAdd.bind(this)}>点击</button>
            </Fragment>
        )
    }
    handleChange(e){
        let val = e.target.value;

        store.dispatch(INPUT_CHANGE_ACTION(val))

    }
    handleAdd(){
        store.dispatch(LIST_ADD_ACTION);
    }
    handleUpdate(){
        this.setState(store.getState().todo);
    }
}