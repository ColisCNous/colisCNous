import React from 'react';
import './../../../sass/formSubscribe.scss';
import { Form, Formik } from 'formik'
import { InputGeneric, TextAreaGeneric } from '../../../shared/genericInput';
import { ButtonGeneric } from '../../../shared/buttonGeneric';
import * as Yup from 'yup';

function SubscribeForm() {


    const schema = Yup.object({
        FirstName: Yup.string().min(3).required(),
        LastName:Yup.string().min(3).required(),
        Email: Yup.string().email().required(),
        Password1:Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required(),
        Password2:Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required(),
        Description:Yup.string().min(3).required()
    })
    
    return (<div className='containerFormSub'>
        <div className='containerCard'>
            <div className='cardForm'>
                <div className='imageForm'>
                </div>

                <div className='bodyForm'>
                    <h3 className="titleForm">Create an Account!</h3>

                    <Formik
                        initialValues={{
                            FirstName: "",
                            LastName: "",
                            Email: "",
                            Password1: "",
                            Password2: "",
                            Description:""
                        }}
                        onSubmit={value => console.log(value)}
                        validationSchema={schema}
                    >
                        {({ }) => (
                            <Form className='formSub'>
                                <div className='containerInputs'>
                                    <div className="containerInput">
                                        <InputGeneric name="FirstName" type='text' label='First name' />
                                    </div>
                                    <div className='md:ml-2'>
                                        <InputGeneric name="LastName" type='text' label='Last name' />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <InputGeneric name="Email" type='email' label='Email' wigthInput='w-full' />
                                </div>
                                <div className='containerInputs2'>
                                    <div className="containerInput">
                                        <InputGeneric name="Password1" type='password' label='Password' />
                                    </div>
                                    <div className='md:ml-2'>
                                        <InputGeneric name="Password2" type='password' label='Corfirm password' />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <TextAreaGeneric name="Description" label='Description' wigthInput='w-full'/>
                                </div>
                                <div className="mb-4 mt-25">
                                    <ButtonGeneric hoverBgButton="hover:bg-green-600" wigthButton='w-full' />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>);
}

export default SubscribeForm;
