
const initialState = {
    listThanhpho: [],
}

function thanhphoReducer(state = initialState, action) {
    switch (action.type) {
         case 'INIT_THANHPHO': {
            state.listThanhpho = [...action.listThanhpho];
            return state;
        }
        case 'GET_ALL':{
            return state.listThanhpho;
        }
        
        default: {
            return state;
        }
    }
}
export default thanhphoReducer;