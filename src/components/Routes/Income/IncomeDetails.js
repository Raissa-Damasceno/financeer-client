import { useState, useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:5005'

function IncomeDetails() {
    const [income, setIncome] = useState([]);

    const getAllIncome = async () => {
      try {
        const response = await axios.get(`${API}/api/income`);
        setIncome(response.data);
  
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAllIncome();
    }, []);


    return ( 
        <div>
        <h1>Income Page</h1>
  
  
        {income.map((exp) => {
          return (
            <div className= "AddIncome">
              <h3>
              Description: {exp.description},
              Value: {exp.value},
              Date: {exp.date},
              Category: {exp.category}
              </h3>
            </div>
          );
        })}
      </div>
     );
}

export default IncomeDetails;