import * as axios from 'axios';

const customAxios = axios.create({

    baseURL: 'http://localhost:8000/api/'

})

export const getMe = () => {
    return customAxios.get('me').then(response => response.data);

}

export const login = (username, password) => {

    return customAxios.post('login', {username, password}).then(response => response.data);

}

export const logout = () => {

    return customAxios.get('logout').then(response => response.data);

}