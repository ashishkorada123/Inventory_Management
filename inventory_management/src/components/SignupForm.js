import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./SignupForm.css";
import Executive from "../models/Executive";

const SignupForm = () => {
  const [executive,setExecutive]=useState(new Executive());

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit form data goes here
  };

  useEffect(() => {
    console.log("Signup page");
    document.title="Sign Up";
    
  }, []);

  return (
    <div className="signup-form-container mt-5">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={executive.name}
            onChange={(e) => setExecutive.name(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={executive.email}
            onChange={(e) => setExecutive.email(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={executive.password}
            onChange={(e) => setExecutive.password(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            value={executive.role}
            onChange={(e) => setExecutive.Role(e.target.value)}
          >
            <option>Select your role</option>
            <option value="MANAGER">Manager</option>
            <option value="EXECUTIVE">Executive</option>
          </Form.Control>
        </Form.Group>

        <Button className="signup-form-btn" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;