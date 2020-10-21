import * as axios from 'axios';

const customAxios = axios.create({

    withCredentials: true,
    headers: {
        "API-KEY": "b5d11698-4357-4dec-ba6f-b303892934db"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const getMe = () => {

    return customAxios.get('auth/me').then(response => response.data);

}

export const loginUser = (email, password) => {

    return customAxios.post('auth/login', {email, password}).then(response => response.data);

}

export const logout = () => {

    return customAxios.delete('auth/login').then(response => response.data);

}