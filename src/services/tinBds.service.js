import axios from 'axios';
import { BACKEND_URL } from './http.service';
import { createBearerToken } from './khachhang.service';

export function getAllBds(dispatch) {
    axios.get(`${BACKEND_URL}/api/tinbds`).then(res => {
        dispatch({
            type: 'INIT',
            listBds: res.data,
        })
    });
}

export function themBds(data, dispatch = null) {
    axios.post(`${BACKEND_URL}/api/tinbds`, data, createBearerToken()).then(res => {
        console.log(res.data);
        dispatch({
            type: 'INIT',
            listBds: res.data,
        })
    })
}

export async function xemchitietBds(idtin) {
    return await axios.get(`${BACKEND_URL}/api/tinbds/${idtin}`).then(res => res.data);
}

export async function timkiemBds(data) {
    console.log(data);
    const arrqTienichbenngoai = data.tienichbenngoai.map(item => `tienichbenngoai[]=${item}&`).join('');
    const arrqTienichbentrong = data.tienichbentrong.map(item => `tienichbentrong[]=${item}&`).join('');
    return await axios.get(`${BACKEND_URL}/api/timkiemTinbds?${arrqTienichbenngoai}&${arrqTienichbentrong}&tieudetinbds=${data.tieudetinbds}&mucgia=${data.mucgia}&dientich=${data.dientich}&thanhpho=${data.thanhpho}&quanhuyen=${data.quanhuyen}&phuongxa=${data.phuongxa}&danhmuc=${data.danhmuc}&hinhthuc=${data.hinhthuc}&huong=${data.huong}`, data).then(res => res.data);
}