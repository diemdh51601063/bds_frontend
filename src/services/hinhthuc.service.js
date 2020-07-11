import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllHinhthuc(dispatch) {
    axios.get(`${BACKEND_URL}/api/hinhthuc`).then(res => {
        dispatch({
            type: 'INIT_HINHTHUC',
            listHinhthuc: res.data,
        })
    });
}