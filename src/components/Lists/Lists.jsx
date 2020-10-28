import React from 'react';
import s from './Lists.module.css';


const Lists = (props) => {

    return(

        <div className={props.className}>

            <img className={s.list_icon} alt={"list-logo"+props.id} src={props.icon}/>
            <h2 className={s.list__heading}>{props.id + ". " + props.headline}</h2>
            <p className={s.list__description}>{props.description}</p>

        </div>

    )

}

export default Lists;