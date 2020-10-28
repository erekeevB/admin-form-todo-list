import customAxios from './axiosCreator';

export const login = (username, password) => {

    return customAxios.post('rest-auth/login/', {username: username, password: password}).then(response => response.data);

}

export const logout = () => {
    return customAxios.post('rest-auth/logout/', {}).then(response => response.data);

}