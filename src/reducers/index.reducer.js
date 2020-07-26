import { combineReducers } from 'redux';
import tinBdsReducer from './tinbds.reducer';
import thanhphoReducer from './thanhpho.reducer';
import hinhthucReducer from './hinhthuc.reducer';
import danhmucReducer from './danhmuc.reducer';
import huongReducer from './huong.reducer';
import dichvuReducer from './dichvu.reducer';
import tienichReducer from './tienich.reducer';
import khachhangReducer from './khachhang.reducer';

const rootReducer = combineReducers({
    tinBds: tinBdsReducer,
    thanhpho: thanhphoReducer,
    hinhthuc:hinhthucReducer,
    danhmuc:danhmucReducer,
    huong:huongReducer,
    dichvu:dichvuReducer,
    tienich:tienichReducer,
    khachhang:khachhangReducer
});

export default rootReducer;