import React from 'react';
import s from './Main.module.css';
import mainLogo from '../../assets/logos/mainLogo.png';
import Forms from './Forms/Forms';
import Lists from '../Lists/Lists';

const Main = () => {

    return (

        <div className={s.main}>

            <div>

                <h1>Баспананы бөліп төлеп алу</h1>
                <h2>Бастапқы жарнасыз, табысты растаусыз, несие тарихы маңызды емес</h2>

            </div>
            <div className={s.main_wrapper}>

                <div className={s.main__grid}>
                    <div className={s.main__forms}>
                        <Forms />
                    </div>

                    <Lists className={s.main__list1} id='1' headline='AAAAA' description='EEEEEEEEEE' />
                    <Lists className={s.main__list2} id='2' headline='BBBBBB' description='EEEEEEEEEE' />
                    <Lists className={s.main__list3} id='3' headline='CCCCCCC' description='EEEEEEEEEE' />
                    <Lists className={s.main__list4} id='4' headline='DDDDDDD' description='EEEEEEEEEE' />

                </div>

            </div>


        </div>

    )

}

export default Main;