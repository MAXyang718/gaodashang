import {createStore,combineReducers} from "redux";
import todo from "./reducers/todo"
import num from "./reducers/num"

const reducer = combineReducers({
    todo,
    num
})

const store = createStore(reducer);

export default store;


/*
combineReducers：作用合并reducer  管理多个store   等价于vuex中的modules


*/