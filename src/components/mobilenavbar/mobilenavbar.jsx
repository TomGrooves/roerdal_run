import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Login from '../login/login';
import { AppContext } from "../../context/ContextProvider"
import Style from './mobilenavbar.module.scss'
import Accordion from '../accordion/accordion'


// Movbile Navbar inspiration from: https://www.cssscript.com/pure-css-fold-out-navigation-menu/

function MobileNavBar() {

    const { navOptions } = useContext(AppContext);

    const options = navOptions
    const navLinks = options.navlinks
    const search = options.search
    const login = options.login

    const linkPos = {
        gridTemplateColumns: `10fr repeat(${search ? navLinks.length + 1 : navLinks.length}, 1fr)`,
        height: options.height,
    }

    const [collapsed, setCollapsed] = useState(true)

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

        <aside className={Style.aside}>
            <nav className={Style.menuToggle}>
            <div class="burger-container">
                <div id="burger" className={!collapsed ? Style.burger_menu: Style.burger_menu_collapsed} onClick={() => {burgerMenu()}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
                <ul className={!collapsed ? Style.menu : Style.menu_shown}>
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
                    {login && <Accordion title={"LOGIN"} child={
                        <Login />
                    }/>}

                </ul>
            </nav>
        </aside>
    )
}

export default MobileNavBar