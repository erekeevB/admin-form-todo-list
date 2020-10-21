import React from 'react';
import s from './Header.module.css';
import mainLogo from '../../assets/logos/mainLogo.png';

const Header = (props) => {

    return(

        <header className={s.header}>

            <div className={s.header__logo}>

                <img className={s.header__logoimg} alt='logo' src={mainLogo} />

            </div>
            <div className={s.header__description}>

                <h2>ҚБ "Бізден көмек клубы"</h2>
                <h3>Әділет басқармасында тіркелген мекеме</h3>

            </div>
            <div>

                <h2>8(700) 130-85-85</h2>

            </div>

        </header>

    )

}

export default Header;