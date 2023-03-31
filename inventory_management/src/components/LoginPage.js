import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form data goes here
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={9}>
          <h2 className="text-center">Login using credentials</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={handleEmailChange} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={handlePasswordChange} 
              />
            </Form.Group>
            <br/>
            <br/>

            <Button variant="primary" type="submit">
              Login
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="warning" type="reset">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;