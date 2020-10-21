import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from '../Main.module.css';
import mainLogo from '../../../assets/logos/mainLogo.png';
import InputHoc from './InputHoc';

const Forms = () => {

    return (
        <Formik
            initialValues={{ name: '', surname: '', telNum: '', date: '' }}
            validate={values => {
                const errors = {};
                if (!values.name || !values.surname) {
                    errors.name = 'Аты Жөніңізді теріңіз!';
                    errors.surname = 'Аты Жөніңізді теріңіз!';
                    debugger
                } else if (!(/^[А-З]+/i.test(values.name) && /^[А-З]+/i.test(values.surname)) ) {
                    errors.name = 'Аты Жөніңізді кирилица немесе латиницада теріңіз!';
                    errors.surname = 'Аты Жөніңізді кирилица немесе латиницада теріңіз!';
                    debugger
                }

                if (!values.telNum) {
                    errors.telNum = 'Телефоныңызды теріңіз!';
                    debugger
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <p>Аты Жөніңіз</p>
                    <Field type="name" name="name" placeholder='input here' component={InputHoc}/>
                    <Field type="surname" name="surname" />
                    <ErrorMessage name="name" component="div" />
                    <ErrorMessage name="surname" component="div" />
                    <p>Телефон Нөміріңіз</p>
                    <Field type="telNum" name="telNum" />
                    <ErrorMessage name="telNum" component="div" />
                    <Field type="date" name="date" />
                    <ErrorMessage name="date" component="div" />
                    <p>Туған күніңіз</p>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>

    )

}

export default Forms;