import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import expenseService from './../../../services/expense.service'
import { PlusOutlined } from '@ant-design/icons'


const AddExpense = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(Date);
  const [category, setCategory] = useState("");

  const handleDescription = (event) => setDescription(event.target.value);
  const handleValue = (event) => setValue(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsModalVisible(false);

      const requestBody = { description, value, date, category };
      await expenseService.createOneExpense(requestBody);

      setDescription("");
      setValue(0);
      setDate(Date);
      setCategory("");

    } catch (error) {
    }
  };

  return (
    <>

      <PlusOutlined style={{ fontSize: '25px', color: '#08c' }} onClick={showModal} />

      <Modal
        className="Modal"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <div className="modalTitle">
          <h3>Add Expense</h3>
        </div>

        <Form className="form">
          <label>Description</label>
          <Input
            name="description"
            type="text"
            value={description}
            onChange={handleDescription}
          />
          <label>Value</label>
          <Input
            name="value"
            type="number"
            value={value}
            onChange={handleValue}
          />

          <label>Date</label>
          <Input name="date" type="date" value={date} onChange={handleDate} />
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
    </>
  );
};

export default AddExpense;
