import React from 'react'
import Style from './notfoundpage.module.scss'
import {Link} from "react-router-dom";


function NotFoundPage(){
    return (
        <div className={Style.notFound}>    
            <h1 className={Style.reg}>40</h1><h1 className={Style.rev}>4</h1>
            <b>Siden findes ikke!</b>
            <p>Siden du leder efter findes ikke.</p>
            <Link to="/roerdal_run/forside"><button>Tilbage til forsiden</button></Link>
        </div>
    )
}

export default NotFoundPage