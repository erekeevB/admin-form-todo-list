import React from 'react';
import s from './Lists.module.css';
import mainLogo from '../../assets/logos/mainLogo.png';

const Lists = (props) => {

    return(

        <div className={s.listItem + ' ' + props.className}>

            <img alt={"list-logo"+props.id} src={mainLogo}/>
            <h2 className={s.list__heading}>{props.id + ". " + props.headline}</h2>
            <p className={s.list__description}>{props.description}</p>

        </div>

    )

}

export default Lists;