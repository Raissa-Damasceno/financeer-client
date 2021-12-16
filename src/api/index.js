import axios from 'axios';

const url = 'http://localhost:5005';

export const fetchStocks = () => axios.get(url);
export const createStock = (newStock) => axios.post(`${url}/api/investments`, newStock);
export const deleteStock = (investmentId) => axios.delete(`${url}/api/investment/${investmentId}`);