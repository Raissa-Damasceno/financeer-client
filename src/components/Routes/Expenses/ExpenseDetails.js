// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const url = "http://localhost:5005/api";

// function ExpenseDetails() {
//     const [expenses, setExpenses] = useState({})

//     const { expensesId } = useParams

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(`${url}/expenses/` + expensesId)
//             console.log(response);
//             const oneExpenseData = response.data;

//             setExpenses(oneExpenseData)
//         }

//         fetchData()

//     }, [])


//     return (
//         <>

//             Description: {expenses.description},
//             Value: {expenses.value},
//             Date: {expenses.date},
//             Category: {expenses.category}

//         </>
//     );
// }

// export default ExpenseDetails;