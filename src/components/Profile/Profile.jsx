import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { logoutThunk } from '../../redux/adminReducer';
import { getSetUsersThunk } from '../../redux/membersPage';
import s from './Profile.module.css'

class Profile extends React.Component {

    componentDidMount() {

        
        
        this.props.getSetUsersThunk(this.props.token);

    }
    
    logout = () => {

        this.props.logoutThunk();

    }

    render() {

        if(!this.props.token){

            return <Redirect to='/login' />

        }

        return (

            <div className={s.adminPage}>

                <div className={s.adminPage__header}>

                    <NavLink to='/' className={s.redirect}>Негізгі бет</NavLink>
                    
                    <h2>Адамдар список</h2>

                    <NavLink to='/' className={s.logout} onClick={() => this.logout(this.props.token)}>Шығу</NavLink>

                </div>

                <div className={s.userlist}>

                    <div className={s.userlist__info}>

                        <div className={s.uselist__infoName}>Аты</div>
                        <div className={s.uselist__infoSurname}>Жөні</div>
                        <div className={s.uselist__infoTel}>Номер</div>

                    </div>
                    
                    {this.props.members ? this.props.members.map((el) => {

                        return <div className={s.uselist__row}>
                                <div className={s.userlist__name}>{el.name}</div> 
                                <div className={s.userlist__surname}>{el.surname}</div> 
                                <div className={s.userlist__number}> {el.number}</div>
                            </div>

                    }) : <div>Ешқандай адам тіркелмеген</div>}

                </div>

            </div>

        )
    }
}

const mStP = (state) => {

    return{

        members: state.members.members,
        username: state.adminPage.username,
        token: state.adminPage.token

    }

}

export default connect(mStP, {getSetUsersThunk, logoutThunk})(Profile);