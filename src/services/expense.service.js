import axios from 'axios';

class ExampleService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOneExpense = async (requestBody) => {
    return this.api.post('api/expenses', requestBody);
  }

  // GET /api/examples
  getAllExpenses = async () => {
    return this.api.get('/api/expenses/');
  }

  // GET /api/examples/:id
  getOneExpense = async (expensesId) => {
    return this.api.get(`/api/expenses/${expensesId}`);
  }

  // PUT /api/examples/:id
  updateOneExpense = async (expensesId, requestBody) => {
    return this.api.put(`/api/expenses/${expensesId}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteExpense = async (expensesId) => {
    return this.api.delete(`/api/expenses/${expensesId}`);
  } 


}

// Create one instance of the service
const exampleService = new ExampleService();

export default exampleService;