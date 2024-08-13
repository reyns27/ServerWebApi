import axios from 'axios';




const _ApiServer = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true
});

/*AuthApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    config.headers = {
        Authorization: token
    }
    return config
})*/

export default _ApiServer