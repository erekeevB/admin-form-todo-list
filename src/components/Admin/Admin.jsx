import React from 'react';
import { connect } from 'react-redux';
import { loginUserThunk } from '../../redux/adminReducer';
import Login from './Login'
import s from './Admin.module.css'

const Admin = (props) => {

    return (

        <>

            {!props.isAuth ?

                <div className={s.adminLoginPage}>

                    <Login loginUserThunk={props.loginUserThunk} />

                </div> :

                <div className={s.adminPage}>

                    <p>Адамдар список</p>

                    {props.users && props.users.map((el) => {

                        return <p className={s.userListItems}>{el}</p>

                    })}

                </div>}

        </>

    )

}

const mStP = (state) => {

    return {

        users: state.adminPage.users,
        isAuth: state.adminPage.isAuth

    }

}

export default connect(mStP, { loginUserThunk })(Admin);