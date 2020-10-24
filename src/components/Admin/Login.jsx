import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import s from './Admin.module.css'

const Login = (props) => {

    return (

        <div className={s.login__formsParent}>
            <div className={s.login__forms}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.name = 'Login Required!';
                        }

                        if (!values.password) {
                            errors.telNum = 'Password Required!';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        // alert(JSON.stringify(values, null, 2));
                        props.loginUserThunk(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={s.login}>
                            <p className={s.login__header}>LOGIN</p>
                            <p className={s.login__inputName}>E-mail</p>
                            <Field type="email" name="email" placeholder='e-mail' />
                            <ErrorMessage className={s.error} name="email" component="div" />
                            <p className={s.login__inputName}>Password</p>
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
            </div>
        </div>

    )

}

export default Login