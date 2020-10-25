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

                    <Lists className={s.main__list} id='1' 
                        headline='Өтініш толтырып жіберіңіз' 
                        description='Сізге біздің менеджер хабарласады' />
                    <Lists className={s.main__list} id='2' 
                        headline='Құжаттармен танысу' 
                        description='Сіздің нөміріңізге құжаттар жіберіледі' />
                    <Lists className={s.main__list} id='3' 
                        headline='Келісім шартқа отыру' 
                        description='Толық ақпарат алып, құжаттармен тарысқан соң келісім шартқа отырасыз' />
                    <Lists className={s.main__list} id='4' 
                        headline='Қорға салу' 
                        description='Келісім шартта көрсетілген шотқа төлем жасайсыз' />

                </div>

            </div>


        </div>

    )

}

export default Main;