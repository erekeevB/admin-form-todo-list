import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Forms.module.css';

const Forms = () => {

    return (
        <Formik
            initialValues={{ name: { firstName: '', secondName: '' }, telNum: '' }}
            validate={values => {
                const errors = {};
                if (!values.name.firstName || !values.name.secondName) {
                    errors.name = 'Аты Жөніңізді теріңіз!';
                }

                if (!values.telNum) {
                    errors.telNum = 'Телефон нөміріңізді теріңіз!';
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
                <Form className={s.form}>
                    <p className = {s.form__header}>Бағдарламаға қатысу үшін толтырыңыз</p>
                    <p className = {s.form__inputName}>Аты Жөніңіз</p>
                    <Field type="name.firstName" name="name.firstName" placeholder='input here' /><br/>
                    <Field type="name.secondName" name="name.secondName" />
                    <ErrorMessage className={s.error} name="name" component="div" />

                    <p className = {s.form__inputName}>Телефон Нөміріңіз</p>
                    <Field type="number" name="telNum" />
                    <ErrorMessage className={s.error} name="telNum" component="div" />

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                                <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z" />
                                <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z" />
                            </svg> 
                                <span>Жіберу</span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>

    )

}

export default Forms;