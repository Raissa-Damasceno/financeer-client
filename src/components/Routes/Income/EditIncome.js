import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import incomeService from "./../../../services/income.service";
import { Modal, Button, Form } from 'antd'

function EditIncome() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(Date);
  const [category, setCategory] = useState("");

  const { incomeId } = useParams();

  const handleDescription = (event) => setDescription(event.target.value);
  const handleValue = (event) => setValue(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);

  useEffect(() => {
    const fetchData = async () => {

      const response = await incomeService.updateOneIncome(incomeId)

      const oneIncome = response.data;
      console.log(oneIncome);

      setDescription(oneIncome.description)
      setValue(oneIncome.value)
      setDate(oneIncome.date)
      setCategory(oneIncome.category)

    }
    fetchData()
  }, [incomeId])

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
      await incomeService.updateOneIncome(incomeId, requestBody)

    } catch (error) {
    }
  }

  const deleteIncome = async () => {
    try {
      await incomeService.deleteIncome(incomeId)

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
          <h3>Edit Income</h3>
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

          </select>
        </Form>
      </Modal>

      <Button type="primary" onClick={showModal}>
        Edit</Button>

      <button onClick={deleteIncome}>Delete Project</button>

    </>
  );
}

export default EditIncome;