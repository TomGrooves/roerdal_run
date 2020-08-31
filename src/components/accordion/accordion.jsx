import React, {useState} from 'react'
import Style from './accordion.module.scss';
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

function Accordion(props) {
    
    /** Accordian accepts these props
   *    * title (deafult "Accordian")
   *    * child (required for content)
   */
    
    const child = props.child || "No child content selected"
    const title = props.title || "Accordian"

    const [active, setActive] = useState(false)    

    return (
    <section className={Style.wrapper}>
        <span className={Style.accordion} onClick={() => {active ? setActive(false): setActive(true)}} >{title} 
            <span className={Style.icon}>{!active ? <RiArrowDownSLine/> : <RiArrowUpSLine/>}</span>
        </span>
        <article className={active ? Style.shown: Style.hidden}>{child}</article>
    </section>
    )
}

export default Accordion