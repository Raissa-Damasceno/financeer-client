import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import expenseService from './../../../services/expense.service'
import { Table } from 'reactstrap'
import AddExpense from "./AddExpense";
import Charts from './../../Charts/Charts'
import { DeleteOutlined, EditOutlined, FolderOpenOutlined } from '@ant-design/icons'

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

  return (
    <div className='cardTotal'>

      <div className='Charts'>
        <Charts />
      </div>


      <Table>
        <thead className='table'>
          <tr>
            <th> Descrição </th>
            <th> Valor </th>

            <th> <AddExpense /></th>
          </tr>
        </thead>
        <tbody>
          {expenses &&
            expenses.map((exp => {
              return (
                <tr key={exp._id}>

                  <td>{exp.description}</td>

                  <td> {exp.value}</td>

                  <td>
                    <div className='botão'>
                      <FolderOpenOutlined style={{ fontSize: '25px', color: '#08c' }} />

                      <Link to={'/expenses/edit/' + exp._id}>
                        <EditOutlined style={{ fontSize: '25px', color: '#08c' }} />
                      </Link>

                      <DeleteOutlined style={{ fontSize: '25px', color: '#08c' }} />

            
                    </div>
                  </td>
                </tr>
              );
            }))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default ExpenseList;