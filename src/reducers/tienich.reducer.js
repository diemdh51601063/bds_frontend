const initialState = {
    listTienich: [],
}

function tienichReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_TIENICH': {
            state.listTienich = [...action.listTienich];
            //console.log(state.listTienich);
            return state;
        }
        
        default: {
            return state;
        }
    }
}
export default tienichReducer;