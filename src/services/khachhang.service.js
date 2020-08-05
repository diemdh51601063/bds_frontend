
import { post } from 'axios';
import { BACKEND_URL } from './http.service';
import * as jwt from 'jsonwebtoken';


export async function signIn(data) {
  const respose = await post(`${BACKEND_URL}/api/dangnhapkhachhang`, data);
  return respose.data.token;
}

export async function signUp(data){
  const respose= await post(`${BACKEND_URL}/api/dangkykhachhang`, data);
  return respose.data.token;
}

export function decodeToken() {
  try {
    const token = localStorage.getItem('token');
    const value = jwt.verify(token, '2eMps3qZsQjGgkKazHOwRy9uzQIkqectUsFs0zE0WURIQ2hUV13TM7WDvsnfpyAI');
    return value;

  } catch (err) {
    return null;
  }
}

export async function xacthucemail(data){
  const ketqua=await post(`${BACKEND_URL}/api/xacthuc`, data, createBearerToken());
  return ketqua;
}

export async function signOut(){
  localStorage.removeItem('token');
}

export function createBearerToken() {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
}


