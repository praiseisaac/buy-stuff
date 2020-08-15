import {config} from './../../config';
import {authHeaderBuyer} from './../helpers/authHeaderBuyer';
import {handleResponse} from './../helpers/handleResponse';

export const buyerService = {
    getAll,
    getOrders
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeaderBuyer() };
    return fetch(`${config.apiUrl}/buyers`, requestOptions).then(response => response.json());
}

function getOrders(id) {
    const requestOptions = { method: 'GET', headers: authHeaderBuyer() };
    return fetch(`${config.apiUrl}/buyers/${id}/getorders`, requestOptions).then(response => response.json());
}
