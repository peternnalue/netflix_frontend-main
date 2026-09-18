import axios from 'axios';

export default axios.create({
    baseURL:'http://100.53.61.242:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
