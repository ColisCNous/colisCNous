import React from 'react';
import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import { InputGeneric } from '../../../shared/genericInput';
import { ButtonGeneric } from '../../../shared/buttonGeneric';
import imageLogin from '../../../imageLogin.jpeg';

function LoginForm() {
  const schema = Yup.object({
    Email: Yup.string().email().required(),
    Password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one uppercase, one lowercase letter, one number and one special character!").required()
  })

  return (<section className='containerFormSub'>
    <div className="containerCard">
      <div className="cardForm">
        <figure>
          <img src={imageLogin} alt="des mains entrain d'écrire sur un clavier" className="image-login"/>
        </figure>
        <div className="bodyForm">
          <h3 className="titleForm">Log in</h3>
          <Formik
            initialValues={{
              Email: "",
              Password: ""
            }}
            onSubmit={value => console.log(value)}
            validationSchema={schema}
          >
            {( {handleChange} ) => (
              <Form className='formSub'>
                  <div className="loginInputs">
                  <InputGeneric name='Email' type='email' label='Email' wigthInput='w-full' />
                  </div>
                  <div className="loginInputs">
                    <InputGeneric name='Password' type='password' label='Password' wigthInput='w-full' />
                  </div>
                <div className="mb-4 mt-25">
                  <ButtonGeneric hoverBgButton='hover:bg-green-600' wigthButton='w-full' />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </section>);
}

export default LoginForm;
