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
import incomeService from './../../../services/income.service'
import { DeleteOutlined, EditOutlined, FolderOpenOutlined } from '@ant-design/icons'
import AddIncome from './AddIncome'
import {Card} from 'antd'
import Chart from './../../Charts/Charts.js'



function IncomeList() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getAllIncome();
  }
    , []);

  const getAllIncome = async () => {
    try {
      const response = await incomeService.getAllIncome();
      setIncome(response.data);

    } catch (error) {

    }
  };
  return (
    <>

    <div className='cardExpen'>
  <Card style={{ width: 300 }}>
    <p>Card content</p>

  </Card>

  <Chart />
  </div>
    
    <TableContainer component={Paper}>
      <Table style={{ width: 1000 }} aria-label="caption table">

        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center"><AddIncome /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {income.map((inc) => (
            <TableRow key={inc._id}>
              <TableCell align="center" component="th" scope="row">
                {inc.description}
              </TableCell>
              <TableCell align="center">{inc.value},00</TableCell>
              <TableCell align="center">

                <FolderOpenOutlined style={{ fontSize: '25px', color: '#08c' }} />
                <Link to={'/income/edit/' + inc._id}>
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

export default IncomeList;