import axios from 'axios';
import { useAuthStore } from '../state/AuthState';
import { ApiResponse } from '../interface/apiResponse';
import { User } from '../interface/user';



type ResquestData = {
    token: string,
    user: User
}

export const AuthLogin = async (email: string, password: string) => {
    return axios.post<ApiResponse<ResquestData>>('/login', {
        email,
        password
    });
};


export const profileResquest = async (id: number) => {
    const token = useAuthStore.getState().token
    return axios.get<ApiResponse<User>>(`/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};