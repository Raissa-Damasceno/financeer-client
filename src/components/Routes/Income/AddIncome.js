import React, { useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Modal, Form, Input } from "antd";
import { PlusOutlined } from '@ant-design/icons'

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
      setIsModalVisible(false);

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
      <PlusOutlined style={{ fontSize: '25px', color: '#08c' }} onClick={showModal} />

      <Modal
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <h3>Add Income</h3>

        <Form onSubmit={handleSubmit}>
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
        <Input
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
