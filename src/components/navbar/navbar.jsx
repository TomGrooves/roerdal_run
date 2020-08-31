import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import Style from '../navbar/navbar.module.scss'
import { AppContext } from "../../context/ContextProvider"
import Login from '../login/login';

function Navbar(){
    const {navOptions} = useContext(AppContext);
    
    const options = navOptions
    const navLinks = options.navlinks
    const search = options.search
    const login = options.login
    const [searchText, setSearchText] = useState("Search...")

    const linkPos = {
        gridTemplateColumns: `10fr repeat(${search ? navLinks.length +1 : navLinks.length}, 1fr)`,
        height: options.height,
    }
    
    return(
        <nav style={linkPos} className={Style.navstyle}>
            <span/>
            {search && 
            <div className={Style.searcharea}>
                <input className={Style.searchfield} onFocus={() => setSearchText("")} onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
                <button onClick={()=>{console.log(searchText)}} className={Style.searchbutton}>Search</button>
            </div>
            
            }

            {login && <Login/>}
            
            {navLinks && navLinks.map((item,i) => {
                if (!item.sub){
                    return <Link className={Style.link} key={i} to={item.main.toLowerCase()}>
                                {item.main}      
                            </Link>
                }
                else{
                    return(
                        <div key={i} className={item.sub ? Style.dropdown : ""}>
                        <p className={Style.link}>{item.main}</p>
                        {item.sub && 
                            <div className={Style.dropdownContent}>
                                {item.sub && item.sub.map((sub, i) => {
                                return <Link className={Style.link} key={i} to={sub.toLowerCase()}>{sub}</Link>
                            })}
                            </div>
                        }           
                    </div>
                    )
                }
            })}
        </nav>
    )

}

export default Navbar