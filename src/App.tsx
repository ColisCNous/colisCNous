// import { Formik, Form } from 'formik';
import React from 'react';
import MainRoute from './components/mainRoute';
import './sass/App.scss';
// import { DatePickerGeneric, InputGeneric, TextAreaGeneric } from './shared/genericInput';
// import * as Yup from 'yup';
// import { ButtonGeneric } from './shared/buttonGeneric';

function App() {

 
  return (
    <div>
<<<<<<< HEAD
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
=======
      <MainRoute />
>>>>>>> dev
    </div>
  );
}

export default App;
