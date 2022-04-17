import React from 'react';
import './../../../css/formSubscribe.css';
import { Form, Formik } from 'formik'
import { InputGeneric, SelectGeneric, TextAreaGeneric } from '../../../shared/genericInput';
import { ButtonGeneric } from '../../../shared/buttonGeneric';
import * as Yup from 'yup';

function SubscribeForm() {


    const schema = Yup.object({
        FirstName: Yup.string().min(3).required(),
        LastName:Yup.string().min(3).required(),
        Email: Yup.string().email().required(),
        Password1:Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!").required(),
        Password2:Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!").required(),
        Description:Yup.string().min(3).required(),
        Languages:Yup.string().required()
    })

    const arrayOption = [
        {value:"French"},
        {value:"English"},
        {value:"Spanish"}
    ]

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
                            Description:"",
                            Languages:""
                        }}
                        onSubmit={value => console.log(value)}
                        validationSchema={schema}
                    >
                        {({handleChange}) => (
                            <Form className='formSub'>
                                <div className='containerInputs'>
                                    <div className="containerInput">
                                        <InputGeneric wigthInput='md:w-full w-full' name="FirstName" type='text' label='First name' />
                                    </div>
                                    <div className=''>
                                        <InputGeneric wigthInput='md:w-full w-full' name="LastName" type='text' label='Last name' />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <InputGeneric name="Email" type='email' label='Email' wigthInput='w-full' />
                                </div>
                                <div className='containerInputs2'>
                                    <div className="containerInput">
                                        <InputGeneric wigthInput='md:w-full w-full' name="Password1" type='password' label='Password' />
                                    </div>
                                    <div>
                                        <InputGeneric wigthInput='md:w-full w-full' name="Password2" type='password' label='Corfirm password' />
                                    </div>
                                </div>
                                
                                <div className="mb-4 mt-25">
                                    <SelectGeneric handlechange={handleChange} wigthInput={'w-full'}  name="Languages" label="Languages" optionsValues={arrayOption} />
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
