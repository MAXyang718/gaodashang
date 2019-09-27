const defaultState = {
    inputVal:"",
    list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "input_change":
            var inputState = Object.assign({},state);
            inputState.inputVal = action.value;
            return inputState;
        case "list_add":
            var listState = Object.assign({},state);
            listState.list.push(listState.inputVal);
            listState.inputVal = "";
            return listState;
    }
    return state;
}