import React from 'react';
import s from './Header.module.css';
import mainLogo from '../../assets/logos/mainLogo.png';
import Admin from '../Admin/Admin';
import { NavLink } from 'react-router-dom';

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
            <div className={s.header__contacts}>

                <h2>8(700) 130-85-85</h2>

            </div>
            <NavLink to='/admin'>Кіру</NavLink>

        </header>

    )

}

export default Header;