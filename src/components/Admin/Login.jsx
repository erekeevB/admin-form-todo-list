import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import s from './Admin.module.css'

const Login = (props) => {

    return (

        <div className={s.login__formsParent}>
            <div className={s.login__forms}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = 'Username Required!';
                        }

                        if (!values.password) {
                            errors.password = 'Password Required!';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        props.loginUserThunk(values);
                        props.getSetUsersThunk(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={s.login}>
                            <p className={s.login__header}>LOGIN</p>
                            <p className={s.login__inputName}>Username</p>
                            <Field type="username" name="username" placeholder='Username' />
                            <ErrorMessage className={s.error} name="email" component="div" />
                            <p className={s.login__inputName}>Password</p>
                            <Field type="password" name="password" placeholder='Password' />
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