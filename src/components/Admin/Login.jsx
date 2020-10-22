import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import s from './Admin.module.css'

const Login = (props) => {

    return (

        <Formik
            initialValues={{ email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.name.firstName || !values.name.secondName) {
                    errors.name = 'Аты Жөніңізді теріңіз!';
                }

                if (!values.telNum) {
                    errors.telNum = 'Телефон нөміріңізді теріңіз!';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                // alert(JSON.stringify(values, null, 2));
                props.loginUserThunk();
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={s.form}>
                    <p className = {s.form__header}>LOGIN</p>
                    <p className = {s.form__inputName}>E-mail</p>
                    <Field type="email" name="email" placeholder='e-mail' />
                    <ErrorMessage className={s.error} name="email" component="div" />
                    <p className = {s.form__inputName}>Password</p>
                    <Field type="password" name="password" placeholder='password' />
                    <ErrorMessage className={s.error} name="password" component="div" />

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                                <span>Login</span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>

    )

}

export default Login