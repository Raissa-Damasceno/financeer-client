import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { Link } from "react-router-dom";

const url = "http://localhost:5005/api";

function AllExpense() {
  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/expenses/`)
      const expenseData = response.data;

      setExpense(expenseData)
    }

    fetchData()

  }, [])

  const deleteExpense = (expenseDescription) => {
    const filterExpense = expenses.filter((oneExpense) => {
      return oneExpense.description !== expenseDescription;
    });
    setExpense(filterExpense);
  };

  return (
    <div>
      <h1>Expenses Page</h1>

      {expenses &&
        expenses.map((exp) => {
          return (
            <div className="AddExpense">

              <Link to={'/expenses/details/:expensesId' + exp._id} key={exp._id}>
                <div className="DetailsDescription">Description:{exp.description}</div>
                <div className="DetailsDescription">Value:{exp.value}</div>
                <div className="DetailsDescription">Date:{exp.date}</div>
                <div className="DetailsDescription">Category:{exp.category}</div>
              </Link>
              <Button
                type="primary"
                onClick={() => deleteExpense(exp.description)}
              >Delete
              </Button>
            </div>
          );
        })}
    </div>
  );
}

export default AllExpense;
