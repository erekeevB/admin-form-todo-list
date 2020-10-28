import * as axios from 'axios';

const customAxios = axios.create({

    baseURL: 'http://localhost:8000/'

})

export default customAxios;