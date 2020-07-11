import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllDanhmuc(dispatch) {
    axios.get(`${BACKEND_URL}/api/danhmucbds`).then(res => {
        dispatch({
            type: 'INIT_DANHMUC',
            listDanhmuc: res.data,
        })
    });
}