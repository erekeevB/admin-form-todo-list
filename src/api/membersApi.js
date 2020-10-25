import * as axios from 'axios';

const customAxios = axios.create({
    
    baseURL: 'http://localhost:8000/api/'

})

export const addMember = (member) => {
    return customAxios.post('members/create', {member}).then(response => response.data);

}

export const getAllMembers = (username, password) => {

    return customAxios.get('members/list').then(response => response.data);

}