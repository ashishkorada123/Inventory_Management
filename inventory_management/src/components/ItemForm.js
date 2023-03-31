import React, { useState , useEffect} from 'react'
import "./SignupForm.css";
import Item from "../models/Item";
import { Form, Button } from "react-bootstrap";
import { addItem } from '../service/ItemService';
import { useNavigate } from 'react-router-dom';

function ItemForm() {

  const [item,setItem]=useState(new Item());
  const navigate=useNavigate();

  useEffect(() => {
    console.log("use effect Item Form Page");
    document.title="Add an Item";
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit form data goes here
    addItem(item);
    window.location.reload();
    navigate("/inventory");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    

    setItem((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
<div className="signup-form-container mt-5">
      <h2>Add Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name of Material</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name of material"
            name="itemName"
            value={item.itemName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUnit">
          <Form.Label>Unit of Measurement</Form.Label>
          <Form.Control
            as="select"
            name="unit"
            value={item.unit}
            onChange={handleChange}
          >
            <option>Select Unit</option>
            <option value="meter">Meters</option>
            <option value="ea">Each</option>
            <option value="kg">Kilogram</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNumber">
          <Form.Label>Price per unit</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCurrency">
          <Form.Label>Currency</Form.Label>
          <Form.Control
            as="select"
            name="currency"
            value={item.currency}
            onChange={handleChange}
          >
            <option>Select currency</option>
            <option value="INR">INR</option>
            <option value="Dollars">Dollars</option>
            <option value="Euros">Euros</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNumber">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={item.stock}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="signup-form-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ItemForm;