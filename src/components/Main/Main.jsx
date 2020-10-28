import React from 'react';
import s from './Main.module.css';
import Lists from '../Lists/Lists';
import Forms from './Forms/Forms';
import dollarIcon from '../../assets/icons/dollar.png'
import chatIcon from '../../assets/icons/chat.png'
import paperIcon from '../../assets/icons/paper.png'
import documentIcon from '../../assets/icons/document.png'
import { connect } from 'react-redux';
import { addUserThunk, setError } from '../../redux/membersPage';
import { withRouter } from 'react-router-dom';

const Main = (props) => {

    return (

        <div className={props.error ? s.main_error + ' ' + s.main : s.main}>

            <div className={s.main__text}>

                <h1>Баспананы бөліп төлеп алу</h1>
                <h2>Бастапқы жарнасыз, табысты растаусыз, несие тарихы маңызды емес</h2>

            </div>
            <div className={s.main_wrapper}>

                <div className={s.main__grid}>
                    <div className={s.main__forms}>
                        <Forms addUserThunk={props.addUserThunk} setError={props.setError}/>
                    </div>

                    <Lists className={s.main__list} id='1' 
                        headline='Өтініш толтырып жіберіңіз' 
                        description='Сізге біздің менеджер хабарласады'
                        icon = {chatIcon} />
                    <Lists className={s.main__list} id='2' 
                        headline='Құжаттармен танысу' 
                        description='Сіздің нөміріңізге құжаттар жіберіледі'
                        icon = {paperIcon}  />
                    <Lists className={s.main__list} id='3' 
                        headline='Келісім шартқа отыру' 
                        description='Толық ақпарат алып, құжаттармен тарысқан соң келісім шартқа отырасыз'
                        icon = {documentIcon}  />
                    <Lists className={s.main__list} id='4' 
                        headline='Қорға салу' 
                        description='Келісім шартта көрсетілген шотқа төлем жасайсыз'
                        icon = {dollarIcon}  />

                </div>

            </div>


        </div>

    )

}

const mStP = (state) => {

    return {
        error: state.members.error
    }

}

export default withRouter(connect(mStP, {addUserThunk, setError})(Main));