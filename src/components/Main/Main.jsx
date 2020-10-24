import React from 'react';
import s from './Main.module.css';
import mainLogo from '../../assets/logos/mainLogo.png';
import Lists from '../Lists/Lists';
import Forms from './Forms/Forms';

const Main = () => {

    return (

        <div className={s.main}>

            <div className={s.main__text}>

                <h1>Баспананы бөліп төлеп алу</h1>
                <h2>Бастапқы жарнасыз, табысты растаусыз, несие тарихы маңызды емес</h2>

            </div>
            <div className={s.main_wrapper}>

                <div className={s.main__grid}>
                    <div className={s.main__forms}>
                        <Forms />
                    </div>

                    <Lists className={s.main__text} id='1' headline='AAAAA' description='EEEEEEEEEE' />
                    <Lists className={s.main__text} id='2' headline='BBBBBB' description='EEEEEEEEEE' />
                    <Lists className={s.main__text} id='3' headline='CCCCCCC' description='EEEEEEEEEE' />
                    <Lists className={s.main__text} id='4' headline='DDDDDDD' description='EEEEEEEEEE' />

                </div>

            </div>


        </div>

    )

}

export default Main;