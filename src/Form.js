import React, { useState } from 'react';
import './App.css';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
} from 'reactstrap';

const LoginForm = () => {
  const [state, setState] = useState({
    form: {
      email: '',
      pwd: '',
    },
    error: {
      email: '',
      pwd: '',
    },
    isLoginSuccess: false
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((state) => ({ ...state, form: { ...state.form, [name]: value } }));
  }

  const validateField = (fieldName, value) => {
    let { error } = state;

    switch (fieldName) {
      case 'email':
        if (value === '')
          error.email = "Email is required"
        else
          error.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : 'Email is invalid';
        break;

      case 'pwd':
        if (value === '')
          error.pwd = "Password is required"
        else
          error.pwd = value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i) ? '' : ' Password is invalid';
        break;

      default:
        break;
    }
    setState((state) => ({ ...state, error }));
  }

  console.log(state)

  const handleSubmit = (e) => {
    let { error } = state;
    for (var key in error) {
      if (!key && error.hasOwnProperty(key)) {
        validateField(key, error[key])
      }

      Object.entries(state.form).map(([key, value]) => {
        validateField(key, value)
      })

      if (Object.values(state.error).filter((err) => err).length === 0) {
        setState((state) => ({ ...state, isLoginSuccess: true }))
      }
    }
  }

  return (<div>
    <Container className="App">
      {state.isLoginSuccess ? "Success Login" : <center>
        <h1>Login</h1>
        <Form className="form" >
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Label className="star">*</Label>
              <Input
                type="text"
                data-cy="loginEmail"
                name="email"
                id="email"
                placeholder="myemail@email.com"
                onBlur={handleChange}
                onChange={handleChange}
              />
              {state.error.email && (
                <span className="error">{state.error.email}</span>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Label className="star">*</Label>
              <Input
                type="password"
                data-cy="loginPassword"
                name="pwd"
                placeholder="********"
                onBlur={handleChange}
                onChange={handleChange}
              />
              {state.error.pwd && (
                <span className="error">{state.error.pwd}</span>
              )}
            </FormGroup>
          </Col>
          <Input type="button" value="submit" onClick={handleSubmit} data-cy="loginButton" ></Input>
        </Form>
      </center>}
    </Container>
  </div>

  );
}

export default LoginForm;