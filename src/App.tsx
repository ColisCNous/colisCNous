import { Formik, Form } from 'formik';
import React from 'react';
import './sass/App.scss';
import { DatePickerGeneric, InputGeneric, TextAreaGeneric } from './shared/genericInput';
import * as Yup from 'yup';
import { ButtonGeneric } from './shared/buttonGeneric';

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
          <TextAreaGeneric name="description" label="description"/>
          <ButtonGeneric/>
        </Form>
         )}
      </Formik>
    </div>
  );
}

export default App;
