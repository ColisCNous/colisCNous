import { Formik, Form } from 'formik';
import React from 'react';
import './sass/App.scss';
import { InputGeneric } from './shared/genericInput';
import * as Yup from 'yup';

function App() {

  const validationSchema= Yup.object().shape({
    testeField: Yup.string().min(3).required(),
    email: Yup.string().email("Mettez un email valide").required("Email requis")
  })
  return (
    <div>
      <Formik
        initialValues={{
          testeField: "",
          email:""
        }}
        onSubmit={value => console.log(value)}
        validationSchema={validationSchema}
      >
        {({handleChange,handleBlur})=>(
        <Form>
          <InputGeneric type="text" name="testeField" label="testField" />
          <InputGeneric type="text" name="email" label="email" />
          <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' >Submit</button>
        </Form>
         )}
      </Formik>
    </div>
  );
}

export default App;
