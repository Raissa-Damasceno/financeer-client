import React, { useState } from "react";
import { Modal, Button, Form } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const API = process.env.REACT_APP_SERVER_URL;

const AddIncome = () => {
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

      const incomeData = { description, value, date, category };
      await axios.post(`${API}/api/income`, incomeData);

      setDescription("");
      setValue(0);
      setDate(Date);
      setCategory("");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        +
      </Button>

      <Modal
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <h3>Add Income</h3>

        <Form onSubmit={handleSubmit}>
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
        <input
          name="category"
          type="text"
          value={category}
          onChange={handleCategory}
        />

        <br />
        <button type="submit">Submit</button>
      </Form>

      </Modal>
    </>
  );
};

export default AddIncome;
