import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllHuong(dispatch) {
    axios.get(`${BACKEND_URL}/api/huong`).then(res => {
        dispatch({
            type: 'INIT_HUONG',
            listHuong: res.data,
        })
    });
}