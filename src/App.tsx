import { Formik, Form } from 'formik';
import React from 'react';
import './sass/App.scss';
import { DatePickerGeneric, InputGeneric, TextAreaGeneric } from './shared/genericInput';
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
          email:"",
          decription:"",
          date:""
        }}
        onSubmit={value => console.log(value)}
        validationSchema={validationSchema}
      >
        {({handleChange,handleBlur})=>(
        <Form>
          <DatePickerGeneric name="date" label='teste' handleChange={handleChange}/>
          <InputGeneric type="text" name="testeField" label="testField" />
          <InputGeneric type="text" name="email" label="email" />
          <TextAreaGeneric name="decription" label="decription"/>
          <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' >Submit</button>
        </Form>
         )}
      </Formik>
    </div>
  );
}

export default App;
