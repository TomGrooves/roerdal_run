import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Login from '../login/login';
import { AppContext } from "../../context/ContextProvider"
import Style from './mobilenavbar.module.scss'


// Movbile Navbar inspiration from: https://www.cssscript.com/pure-css-fold-out-navigation-menu/

function MobileNavBar(props) {

    const { navOptions } = useContext(AppContext);

    const options = navOptions
    const navLinks = options.navlinks
    const search = options.search
    const login = options.login

    const linkPos = {
        gridTemplateColumns: `10fr repeat(${search ? navLinks.length + 1 : navLinks.length}, 1fr)`,
        height: options.height,
    }
    // return html
    return (

        <aside className={Style.aside}>
            <nav className={Style.menuToggle}>
                <input type="checkbox" className={Style.inputcontrol}></input>
                <span></span>
                <span></span>
                <span></span>
                <ul className={Style.menu}>
                    {navLinks && navLinks.map((item, i) => {
                        if (!item.sub) {
                            return <Link key={i} to={"/" + item.main.toLowerCase()}>
                                {item.main}
                            </Link>
                        }
                        else {
                            return null
                        }
                    }
                    )}
                    {login && <Login />}

                </ul>
            </nav>
        </aside>
    )
}

export default MobileNavBar