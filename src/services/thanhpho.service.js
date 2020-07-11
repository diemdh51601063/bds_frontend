import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllThanhpho(dispatch) {
    axios.get(`${BACKEND_URL}/api/allcity`).then(res => {
        dispatch({
            type: 'INIT_THANHPHO',
            listThanhpho: res.data.results,
        })
    });
}

export async function getAllQuanHuyen(idThanhPho) {
    return await axios.get(`${BACKEND_URL}/api/laydanhdsquan/${idThanhPho}`).then(res => res.data.results);
}

export async function getAllPhuongXa(idQuanHuyen) {
    return await axios.get(`${BACKEND_URL}/api/laydanhsachphuongxa/${idQuanHuyen}`).then(res => res.data.results);
}