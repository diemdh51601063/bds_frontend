
const initialState = {
    listHinhthuc: [],
}

function hinhthucReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_HINHTHUC': {
            state.listHinhthuc = [...action.listHinhthuc];
            return state;
        }
        
        default: {
            return state;
        }
    }
}

export default hinhthucReducer;