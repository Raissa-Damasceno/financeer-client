import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import expenseService from './../../services/expense.service'

const BarChartComponent = () => {
  const [expenses, setExpense] = useState();

  console.log(expenses);

  useEffect(() => {
    getAllExpenses();
  }
    , []);

  const getAllExpenses = async () => {
    try {
      const response = await expenseService.getAllExpenses();
      setExpense(response.data);

    } catch (error) {

    }
  };

  // const sumOfCategory = () =>{
  //   let sum = 0
  //   if(expenses.length > 0) {
  //     expenses.filter(exp=> exp.category === 'Entertainment') 
      
  //     sum = filterEnter.map(exp=> exp.value).reduce((a,b)=> a+b)
  //   }

  //   console.log(sum);
  // }
  





  const data =
    [
      {
        category: "Home",
        total: 1
      },
      {
        category: "Education",
        total: 8
      },
      {
        category: "Entertainment",
        total: 32
      },
      {
        category: "Health",
        total: 17
      },
      {
        category: "Shopping",
        total: 4
      },
      {
        category: "Others",
        total: 4
      }
    ];


  return (
    <div style={barChartStyle}>
      <h4>Bar Chart</h4>

      <BarChart width={550} height={250} data={data}>
        <XAxis dataKey="category" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="total" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

const barChartStyle = {
  width: '40%',
  float: 'center',
  textAlign: 'center'
};

export default BarChartComponent;