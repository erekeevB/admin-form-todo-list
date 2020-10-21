import React from 'react';

const Admin = (props) => {

    return (

        <div>

            {props.users && props.users.map((el)=>{

                return <div>{el}</div>

            })}

        </div>

    )

}

export default Admin