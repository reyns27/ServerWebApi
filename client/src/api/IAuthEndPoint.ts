import axios from 'axios';
import { User } from '../interface/user';
import { useAuthStore } from '../state/AuthState';



type ResquestData = {
    Token: string,
    user: User
}

export const AuthLogin = async (email: string, password: string) => {
    return axios.post<ResquestData>('/api/login', {
        email,
        password
    });
};


export const profileResquest = async (id: number) => {
    const token = useAuthStore.getState().token
    return axios.get<User>(`/api/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};