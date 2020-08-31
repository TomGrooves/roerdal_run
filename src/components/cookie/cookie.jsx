import React, {useEffect, useState} from 'react'
import Style from './cookie.module.scss'
import Cookies from 'js-cookie';


function CookieBanner () {

    const [showBanner, setShowBanner] = useState(false)

    const setAccept = () => {
        if (!Cookies.get("accept")){
            Cookies.set("accept", true, {expires: 7});
            setShowBanner(false)
        }
    }

    useEffect(() => {
        if (!Cookies.get("accept")){
            setShowBanner(true)
        }
    }, [])

    return (
        showBanner && 
        <section className={Style.background}>
            <div className={Style.cookiebanner}> 
                <p>
                This is a cookie banner - click OKAY to accept cookies to proceed to site
                </p>
            <button onClick={()=>{setAccept()}}>Okay</button>
            </div>
        </section>
    )
}

export default CookieBanner