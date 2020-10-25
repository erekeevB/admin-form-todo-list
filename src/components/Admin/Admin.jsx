import React from 'react';
import { connect } from 'react-redux';
import { getSetAuth, loginUserThunk, logoutThunk } from '../../redux/adminReducer';
import Login from './Login'
import s from './Admin.module.css'
import { withRouter } from 'react-router-dom';
import { getSetUsersThunk } from '../../redux/membersPage';

class Admin extends React.Component {

    componentDidMount() {

        this.props.getSetAuth();

        console.log(this.props.isAuth)

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props !== prevProps) {
            if (this.props.isAuth) {

                this.props.getSetUsersThunk();

            }
        }

    }

    logout = () => {

        this.props.logoutThunk();

        this.props.history.push('/');

    }

    render() {

        return (

            <>

                {!this.props.isAuth ?

                    <div className={s.adminLoginPage}>

                        <Login loginUserThunk={this.props.loginUserThunk} getSetUsersThunk={this.props.getSetUsersThunk} />

                    </div> :

                    <div className={s.adminPage}>

                        <div>

                            <p>Адамдар список</p>

                            <button className='s.logout' onClick={this.logout}>Шығу</button>

                        </div>

                        {this.props.members ? this.props.members.map((el) => {

                            return <p className={s.userListItems}>{el.name} {el.surname} {el.number}</p>

                        }) : <div>AAAAAAA</div>}

                    </div>}

            </>

        )
    }

}

const mStP = (state) => {

    return {

        members: state.members.members,
        isAuth: state.adminPage.isAuth,
        username: state.adminPage.username

    }

}

export default withRouter(connect(mStP, { loginUserThunk, getSetAuth, logoutThunk, getSetUsersThunk })(Admin));