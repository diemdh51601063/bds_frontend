
const initialState = {
    listBds: [],
}

function tinBdsReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT': {
            state.listBds = action.listBds;
            return state;
        }
        case 'GET_ALL':{
            return state.listBds;
        }
        case 'SEARCH':{
            
            
        }
        default: {
            return state;
        }
    }
}

export default tinBdsReducer;