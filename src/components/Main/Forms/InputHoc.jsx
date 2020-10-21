import React from 'react';

const InputHoc = ({field, form, ...props}) => {

    debugger
    return(

        <input {...field} {...props} />

    )

}

export default InputHoc;