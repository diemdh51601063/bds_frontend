import axios from 'axios';
import { BACKEND_URL } from './http.service';

export function getAllTienich(dispatch) {
    axios.get(`${BACKEND_URL}/api/tienich`).then(res => {
        dispatch({
            type: 'INIT_TIENICH',
            listTienich: res.data,
        })
        //console.log(res.data);
    });
    
}