const initialState = {
    listDichvu: [],
}

function dichvuReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_DICHVU': {
            state.listDichvu = [...action.listDichvu];
            return state;
        }
        
        default: {
            return state;
        }
    }
}

export default dichvuReducer;