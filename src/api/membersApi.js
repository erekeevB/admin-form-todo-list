import customAxios from './axiosCreator';

export const addMember = (member) => {

    return customAxios.post('api/create/', {...member}).then(response => response.data);

}

export const deleteMember = (id) => {

    return customAxios.post('api/'+ id +'/delete/').then(response => response.data);

}

export const getAllMembers = (token) => {

    debugger
    return customAxios.get('api/', {
        headers: {
            "Content-Type" : "application/json",
            Authorization: "Token " + token}})
        .then(response => response.data);

}