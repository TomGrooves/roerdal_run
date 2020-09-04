import React from 'react'
import Style from './footer.module.scss'
import {Link} from "react-router-dom";
function Footer() {
    
    return (

        <section className={Style.footerGrid}>
            <span></span>
            <div>
                <p className={Style.sideways}>Informationer</p>
                <Link className={Style.text} to="/roerdal_run/om rørdal run">Om Rørdal Run</Link>
                <Link className={Style.text} to="/roerdal_run/forside">Forside</Link>
                <Link className={Style.text} to="/roerdal_run/tilmelding">Tilmelding</Link>
                <Link className={Style.text} to="/roerdal_run/distancer">Distancer</Link>
            </div>
            <div>
                <p className={Style.sideways}>Kontakt os</p>
                <p className={Style.text}>+45 35 67 90 87</p>
                <p className={Style.text}>ROERDALRUN@MAIL.COM</p>
            </div>
            <span></span>
        </section>
    )
}

export default Footer