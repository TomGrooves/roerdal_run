import React, {useContext, useEffect} from 'react'
import { AppContext } from "../../context/ContextProvider"
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './distancepage.module.scss'
import img5 from '../../images/img5.jpg'
import {Link} from "react-router-dom";

function DistancePage(){
    const {getPageContent, setPageData, pageData, allRunData, selectedRunID, setSelectedRunID} = useContext(AppContext);

    useEffect(() => {
        setSelectedRunID(0)
        getPageContent(2)
        setPageData(pageData)
    }, [])

    return (
        <section className={Style.mainContainer}> 
            <>
            <Carousel/>
                <article className={Style.topContainer}>
                    <h2>{pageData.item && pageData.item.title}</h2>
                    {pageData.item && <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(pageData.item.content)}}></div>}
                </article>

                <section className={Style.gridContainer}>
                <div className={Style.gridItem}>
                    <h2>Distancebeskrivelse</h2>
                    {pageData.item && pageData.item.teaser}
                    <ul>
                        {allRunData.items && allRunData.items.map((item, index) => {
                        return <li key={index} id={item.id} onClick={(e) => {setSelectedRunID(e.target.id)}}>{item.title}</li>
                        })}
                    </ul>
                </div> 
                <div>
                    {selectedRunID == 0 ? <img alt="Runners" className={Style.image} src={img5}></img> : 
                    
                    <div className={Style.runContainer}>
                        <h2>{allRunData.items && allRunData.items[selectedRunID -1].title}</h2>
                        <Link to="/roerdal_run/tilmelding"><button>Tilmeld dig {allRunData.items[selectedRunID -1].title}</button></Link>
                        <p>{allRunData.items && allRunData.items[selectedRunID -1].description}</p>
                    </div>}
                </div>
                </section>
            </>
        </section>
    )
}

export default DistancePage