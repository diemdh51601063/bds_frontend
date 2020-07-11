const initialState = {
    listHuong: [],
}

function huongReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_HUONG': {
            state.listHuong = [...action.listHuong];
            return state;
        }
        
        default: {
            return state;
        }
    }
}
export default huongReducer;