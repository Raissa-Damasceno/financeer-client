import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import expenseService from './../../../services/expense.service'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import AddExpense from './AddExpense'
import {Card} from 'antd'
import Chart from './../../Charts/Charts.js'



function ExpenseList() {
  const [expenses, setExpense] = useState([]);

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

  let sumOfExpenses = 0;
  if (expenses.length > 0 ){
    sumOfExpenses = expenses.map(exp=> exp.value).reduce((a,b)=> a + b);
  }


  return (
    <>

    <div className='cardExpen'>
  <Card style={{ width: 300 }}>
  <h1>
    <p>R${sumOfExpenses},00</p>
    </h1>

  </Card>

  <Chart />
  </div>
    
    <TableContainer component={Paper}>
      <Table style={{ width: 1000 }} aria-label="caption table">

        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center"><AddExpense /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((exp) => (
            <TableRow key={exp._id}>
              <TableCell align="center" component="th" scope="row">
                {exp.description}
              </TableCell>
              <TableCell align="center">{exp.value},00</TableCell>
              <TableCell align="center">

                <Link to={'/expenses/edit/' + exp._id}>
                  <EditOutlined style={{ fontSize: '25px', color: '#08c' }} />
                </Link>
                <DeleteOutlined style={{ fontSize: '25px', color: '#08c' }} />

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default ExpenseList;
