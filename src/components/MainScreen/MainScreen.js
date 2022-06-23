import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {routingConstants} from "../../Constans/routingConstants";

const MainScreen = () => {
    return (
        <div>
            <h1 className="title-main-screen">Main screen</h1>
            <div className='button-container'>
                <button className="main-screen-button">
                    <Link to={routingConstants.formAddDevice}>
                        Add device
                    </Link>
                </button>
                <button className="main-screen-button">
                    <Link
                        to={routingConstants.smth}

                    >
                        Something else
                    </Link>
                    </button>
            </div>
        </div>
    )
}

export default MainScreen;