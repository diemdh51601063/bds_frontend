
const initialState = {
    listDanhmuc: [],
}

function danhmucReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_DANHMUC': {
            state.listDanhmuc = [...action.listDanhmuc];
            return state;
        }
        
        default: {
            return state;
        }
    }
}

export default danhmucReducer;