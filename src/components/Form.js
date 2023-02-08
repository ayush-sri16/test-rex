import React, { useState } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp.js';





const Form = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <>
      {
        currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }


    </>
  )
}

export default Form