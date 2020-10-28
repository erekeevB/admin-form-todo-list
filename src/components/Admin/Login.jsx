import React from 'react';
import { connect } from 'react-redux';
import { getToken, loginUserThunk, logoutThunk } from '../../redux/adminReducer';
import LoginForm from './LoginForm'
import { Redirect, withRouter } from 'react-router-dom';

class Login extends React.Component {

    componentDidMount(){

        this.props.getToken();

    }

    render() {

        return (

            <>

                {!this.props.token ?


                    <LoginForm 
                        loginUserThunk={this.props.loginUserThunk}
                        error = {this.props.error} 
                    /> :

                    <Redirect to='/profile' />

                }

            </>

        )
    }

}

const mStP = (state) => {

    return {

        error: state.adminPage.error,
        token: state.adminPage.token

    }

}

export default withRouter(connect(mStP,
    { 
        loginUserThunk, 
        logoutThunk, 
        getToken

    })
     (Login));