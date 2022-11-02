

const authReducer = (state="", action) =>{
    switch(action.type){
        case 'LOGIN':
            state = action.payload;
            return state;
        case 'LOGOUT':
            state = ""
            return "";
        default:
            return state;
    }
}

export default authReducer;