const defaultState = {
    n:10
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case "num_add_action":
            var numstate = Object.assign({},state);
            numstate.n++
            return numstate;
    }
    return state;
}