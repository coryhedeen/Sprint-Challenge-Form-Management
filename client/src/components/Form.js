import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

class LoginForm extends React.Component {
  constructor({errors, touched, values, handleSubmit}){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <Form>
        <Field type="text" placeholder="name" name="name" />
        <Field type="password" placeholder="password" name="password" />
      </Form>
    );
  }
}

const FormikLogin = withFormik({
  mapPropsToValues(values){
    return {
      name: values.name || "",
      password: values.password || ""
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required()
  })

})(LoginForm);
export default FormikLogin;
