const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case'setCurrentUser' :
        return{
            ...state,
            currentUser:action.payload
        }

        default:
            return state;
    };

};

export default userReducer;