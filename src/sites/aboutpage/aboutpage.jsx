import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../../components/gridbox/gridbox'
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './aboutpage.module.scss'

function AboutPage(){
    const {getPageContent, setPageData, pageData} = useContext(AppContext);

    useEffect(() => {
        getPageContent(4)
        setPageData(pageData)
    }, [])

    console.log(pageData)

    return (
        <section className={Style.mainContainer}>
            <Carousel/>
                <div className={Style.topContainer}>
                    <h2>{pageData.item && pageData.item.title}</h2>
                    {pageData.item && <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(pageData.item.content)}}></p>}
                </div>
        </section>
    )
}

export default AboutPage