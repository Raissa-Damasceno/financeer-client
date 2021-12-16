import axios from 'axios';

const API = process.env.REACT_APP_SERVER_URL;

export const fetchStocks = () => axios.get(API);
export const createStock = (newStock) => axios.post(`${API}/api/investments`, newStock);
export const deleteStock = (investmentId) => axios.delete(`${API}/api/investment/${investmentId}`);