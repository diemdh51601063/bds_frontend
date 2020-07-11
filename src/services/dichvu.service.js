import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllDichvu(dispatch) {
    axios.get(`${BACKEND_URL}/api/dichvu`).then(res => {
        dispatch({
            type: 'INIT_DICHVU',
            listDichvu: res.data.data,
        })
    });
}