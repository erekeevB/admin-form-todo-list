import React from 'react';
import { connect } from 'react-redux';
import { loginUserThunk } from '../../redux/adminReducer';
import Login from './Login'

const Admin = (props) => {

    return (

        <>

            {!props.isAuth ? 

                <Login loginUserThunk = {props.loginUserThunk} /> :

                <div>

                    {props.users && props.users.map((el) => {

                        return <div>{el}</div>

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

export default connect(mStP, {loginUserThunk})(Admin);