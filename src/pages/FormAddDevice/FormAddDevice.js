import React from 'react';
import {Link} from "react-router-dom";
import {routingConstants} from "../../Constans/routingConstants";

const FormAddDevice = () => {
    return (
        <div>
            <h1 className="title-main-screen">Form</h1>
    <button className="main-screen-button">
        <Link to={routingConstants.mainScreen}>
            Back to main screen
        </Link>
    </button>
        </div>

    )
}

export default FormAddDevice;