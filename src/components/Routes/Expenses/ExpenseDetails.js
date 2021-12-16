import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import expenseServices from './../../../services/expense.service'




function ExpenseDetails() {
    const [expenses, setExpenses] = useState({})

    const { expensesId } = useParams();

    const getOneExpense = async () => {
        try {
            const response = await expenseServices.getOneExpense(expensesId)
            const oneExpense = response.data;
            console.log(oneExpense);

            setExpenses(oneExpense)
        } catch (error) { }
    }

    useEffect(() => {
        getOneExpense()

    }, [])

    return (
        <>
            Descriptions: {expenses.description},
            Value: {expenses.value},
            Date: {expenses.date},
            Category: {expenses.category}
        </>
    );
}

export default ExpenseDetails;