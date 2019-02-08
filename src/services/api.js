import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dioneyapi.herokuapp.com'
});

export default api;