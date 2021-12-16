import axios from 'axios';

const url = 'http://localhost:5005/api';

export const fetchStocks = () => axios.get(url);
export const createStock = (newStock) => axios.post(`${url}/investments`, newStock);
export const deleteStock = (investmentId) => axios.delete(`${url}/investment/${investmentId}`);