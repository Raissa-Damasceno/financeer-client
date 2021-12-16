import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import expenseService from "./../../../services/expense.service";
import { Modal, Button, Form } from 'antd'

function EditExpense() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(Date);
  const [category, setCategory] = useState("");

  const { expensesId } = useParams();

  const handleDescription = (event) => setDescription(event.target.value);
  const handleValue = (event) => setValue(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);

  useEffect(() => {
    const fetchData = async () => {

      const response = await expenseService.updateOneExpense(expensesId)

      const oneExpense = response.data;
      console.log(oneExpense);

      setDescription(oneExpense.description)
      setValue(oneExpense.value)
      setDate(oneExpense.date)
      setCategory(oneExpense.category)

    }
    fetchData()
  }, [expensesId])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { description, value, date, category };
      await expenseService.updateOneExpense(expensesId, requestBody)

    } catch (error) {
    }
  }

  const deleteExpense = async () => {
    try {
      await expenseService.deleteExpense(expensesId)

    } catch (error) {
    }
  }

  return (
    <>

      <Modal
        className="Modal"
        visible={isModalVisible}
        onOk={handleFormSubmit}
        onCancel={handleCancel}
      >
        <div className="modalTitle">
          <h3>Add Expense</h3>
        </div>

        <Form className="form">
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={handleDescription}
          />
          <label>Value</label>
          <input
            name="value"
            type="number"
            value={value}
            onChange={handleValue}
          />
          <label>Date</label>
          <input name="date" type="date" value={date} onChange={handleDate} />
          Category
          <select
            name="category"
            value={category}
            onChange={handleCategory}
          >
            <option value="Home">Home</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Restaurant and bar">Restaurant and bar</option>
            <option value="Health">Health</option>
            <option value="Pets">Pets</option>
            <option value="Groceries">Groceries</option>
            <option value="Shopping">Shopping</option>
            <option value="Subcriptions">Subcriptions</option>
            <option value="Transportation">Transportation</option>
            <option value="Travel">Travel</option>
            <option value="Others">Others</option>
          </select>
        </Form>
      </Modal>

      <Button type="primary" onClick={showModal}>
        Edit</Button>

      <button onClick={deleteExpense}>Delete Project</button>

    </>
  );
}

export default EditExpense;