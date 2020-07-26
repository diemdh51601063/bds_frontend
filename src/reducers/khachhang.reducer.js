import {decodeToken} from '../services/khachhang.service'

const initialState = {
    khachhang: null,
}

function khachhangReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_KHACHHANG': {
            state.khachhang = action.khachhang;
            return state;
            //return { ...state, user: action.payload };
        }
        case 'REGISTER_KHACHHANG': {
            state.khachhang = action.khachhang;
            return state;
            //return { ...state, user: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default khachhangReducer;