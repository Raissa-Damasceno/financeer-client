import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = { useNavigate }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsModalVisible(false);

      const expenseData = { description, value, date, category };
      await axios.post("http://localhost:5005/api/expenses", expenseData);

      setDescription("");
      setValue(0);
      setDate(Date);
      setCategory("");

      navigate('/')
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      +</Button>


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
            multiple
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
