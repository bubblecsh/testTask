import React from "react";
import '../App.css'


const Error = ({message}) => {
    return (
        <div className={'error_container'}>
            <p>Error: {message}</p>
        </div>
    )
}

export default Error