import axios from 'axios';

class IncomeService {
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
  createOneIncome= async (requestBody) => {
    return this.api.post('/api/income', requestBody);
  }

  // GET /api/examples
  getAllIncome = async () => {
    return this.api.get('/api/income');
  }

  // GET /api/examples/:id
  getOneIncome = async (incomeId) => {
    return this.api.get(`/api/income/${incomeId}`);
  }

  // PUT /api/examples/:id
  updateOneIncome = async (incomeId, requestBody) => {
    return this.api.put(`/api/income/${incomeId}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteIncome = async (incomesId) => {
    return this.api.delete(`/api/income/${incomesId}`);
  } 

}

// Create one instance of the service
const incomeService = new IncomeService();

export default incomeService;