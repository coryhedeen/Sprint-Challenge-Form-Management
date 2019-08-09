import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

class LoginForm extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <Form>
        
      </Form>
    );
  }
}

const FormikLogin = withFormik({})(LoginForm);
export default FormikLogin;
