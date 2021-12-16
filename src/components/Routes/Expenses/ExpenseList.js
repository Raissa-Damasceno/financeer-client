import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import expenseService from './../../../services/expense.service'
import { Table } from 'reactstrap'
import { Button } from 'antd'
import AddExpense from "./AddExpense";
import { Row, Col, Card } from 'react-bootstrap'
import Charts from './../../Charts/Charts'
import DeleteIcon from '../../../images/delete.svg';

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

  let sumOfExpenses = 0
  if (expenses.length > 0) {
    sumOfExpenses = expenses.map(exp => exp.value).reduce((a, b) => a + b)
  }

  return (
    <div className='cardTotal'>

      <Row xs={2} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Total</Card.Title>
                <Card.Text>
                <h2>
                €{sumOfExpenses},00
                </h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className='test'>
      <div className='Charts'>
      <Charts  />
      </div>


      <Table>
          <div className= 'table'>
        <thead>
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
                    <Button>View</Button>

                    <Link to= {'/expenses/edit/' + exp._id}>
                      <Button >Edit</Button>
                    </Link>

                    <Button>
                    <img className='delete-icon' src={DeleteIcon} alt='delete-icon' />
                    </Button>
                  </td>
                </tr>
              );
            }))

          }

        </tbody>
      </div>
      </Table>
      </div>
    </div>

  );
}

export default ExpenseList;
