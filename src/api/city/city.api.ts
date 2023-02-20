import { API_URLS } from '../index';
import axios from 'axios';

export const cityAPI = {
    getCity() {
        const token = localStorage.getItem('token');
        return axios.get(API_URLS.city, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};