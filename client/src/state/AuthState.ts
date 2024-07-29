import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../interface/user';

interface State {
    token: string,
    profile: User | any,
    isAuth: boolean
};

type Actions = {
    setToken: (token: string) => void
    setProfile: (profile: User) => void
};


export const useAuthStore = create(persist<State & Actions>(
    (set) => ({
        token: "",
        isAuth: false,
        profile: null,
        setToken: (token: string) => set(() => ({
            token,
            isAuth: true
        })),
        setProfile: (profile: User) => set(() => ({
            profile
        }))
    }), {
    name: 'auth'
}
));