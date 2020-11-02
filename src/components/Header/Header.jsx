import React, {useState} from 'react';
import s from './Header.module.css';
import mainLogo from '../../assets/icons/mainlogo/mainLogo.png';
import { NavLink } from 'react-router-dom';
import down_arrow from './../../assets/icons/down_arrow.png';
import facebook from './../../assets/icons/contacts/facebook.png'
import instagram from './../../assets/icons/contacts/instagram.png'
import telegram from './../../assets/icons/contacts/telegram.png'
import whatsapp from './../../assets/icons/contacts/whatsapp.png'

const Header = () => {

    let [active, setActive] = useState(0);

    const toggleActive = () => {

        setActive(!active);

    }
    
    return (

        <header className={s.header}>

            <div className={s.wrapper}>
                <div className={s.header__logo}>

                    <img className={s.header__logoimg} alt='logo' src={mainLogo} />

                </div>
                <div className={s.header__description}>

                    <h2>ҚБ "Бізден көмек клубы"</h2>
                    <h3>Әділет басқармасында тіркелген мекеме</h3>

                </div>
                <div className={s.header__contacts}>

                    <h2>8(700) 130-85-85</h2>
                    <div className={s.contacs_icons}>

                        <a href='http://facebook.com' target='_blank' 
                            rel="noopener noreferrer"><img alt='facebook' src={facebook}/></a>
                        <a href='http://instagram.com' target='_blank' 
                            rel="noopener noreferrer"><img alt='instagram' src={instagram}/></a>
                        <a href='http://whatsapp.com' target='_blank' 
                            rel="noopener noreferrer"><img alt='whatsapp' src={whatsapp}/></a>
                        <a href='http://telegram.org' target='_blank' 
                            rel="noopener noreferrer"><img alt='telegram' src={telegram}/></a>

                    </div>

                </div>
                <NavLink className={s.header__login} to='/login'>Кіру</NavLink>
                <button onClick={toggleActive} 
                        className={!active? s.down_arrow : s.down_arrow + " " + s.active} >
                    <img 
                        alt='down arrow' 
                        src={down_arrow} 
                    />
                </button>
            </div>
            <div className={!active? s.mobile : s.mobile + " " + s.active}>

                <div className={s.mobile__description}>

                    <h2>ҚБ "Бізден көмек клубы"</h2>
                    <h3>Әділет басқармасында тіркелген мекеме</h3>

                </div>
                <div className={s.mobile__contacts_wrapper}>
                    <div className={s.mobile__contacts}>

                        <h2>Контакттар</h2>
                        <h3>8(700) 130-85-85</h3>
                        <div className={s.contacs_icons}>

                            <a href='http://facebook.com' target='_blank' 
                                rel="noopener noreferrer"><img alt='facebook' src={facebook}/></a>
                            <a href='http://instagram.com' target='_blank' 
                                rel="noopener noreferrer"><img alt='instagram' src={instagram}/></a>
                            <a href='http://whatsapp.com' target='_blank' 
                                rel="noopener noreferrer"><img alt='whatsapp' src={whatsapp}/></a>
                            <a href='http://telegram.org' target='_blank' 
                                rel="noopener noreferrer"><img alt='telegram' src={telegram}/></a>

                        </div>

                    </div>
                </div>

                <NavLink className={s.mobile__login} to='/login'>Кіру</NavLink>

            </div>

        </header>

    )

}

export default Header;