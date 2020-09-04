import React, { useContext, useState } from 'react'
import { AppContext } from "../../context/ContextProvider"
import { Link } from 'react-router-dom';
import Login from '../login/login';
import Style from './navbar.module.scss'
import Accordion from '../accordion/accordion'
import {FaInstagram, FaFacebook} from 'react-icons/fa'

// Movbile Navbar inspiration from: https://www.cssscript.com/pure-css-fold-out-navigation-menu/

function RealMobileNavBar() {


    const { navOptions } = useContext(AppContext);
    const [collapsed, setCollapsed] = useState(false)

    const options = navOptions
    const navLinks = options.navlinks
    const login = options.login


    function burgerMenu(){

        if (collapsed){
            setCollapsed(false)
        }
        else{
            setCollapsed(true)
        }
    }
    // return html
    return (

        <nav className={Style.menuToggle}>
            <div>
                <div id="burger" className={!collapsed ? Style.burger_menu: Style.burger_menu_collapsed} onClick={() => {burgerMenu()}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <aside className={!collapsed ? Style.aside: Style.aside_collapsed}>
                <ul className={!collapsed ? Style.menu : Style.menu_shown}>
                    {navLinks && navLinks.map((item, i) => {
                        if (!item.sub) {
                            return <Link onClick={()=>{setCollapsed(false)}} key={i} to={"/roerdal_run/" + item.main.toLowerCase()}>
                                {item.main}
                            </Link>
                        }
                        else {
                            return null
                        }
                    }
                    )}
                    {login && <Accordion title={"LOGIN"} child={
                        <Login />
                    }/>}

                </ul>
                <div className={Style.icons}>
                    <FaInstagram/><FaFacebook/>
                </div>
            </aside>
            </nav>
    )
}

export default RealMobileNavBar