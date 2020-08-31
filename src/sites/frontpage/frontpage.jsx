import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../../components/gridbox/gridbox'
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './frontpage.module.scss'


function FrontPage(){
    const {getPageContent, setPageData, pageData} = useContext(AppContext);

    useEffect(() => {
        getPageContent(1)
        setPageData(pageData)
    }, [])

    console.log(pageData)

    return (
        <section className={Style.mainContainer}>
            <Carousel delay={400}/>
            <GridBox columns={2} rows={1} width="50%" child = {
                <>
                <div>
                    <h2>{pageData.item && pageData.item.title}</h2>
                    <p>{pageData.item && pageData.item.teaser}</p>
                </div>
{/*             {pageData.item && <article>{<p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(pageData.item.content)}}></p>}</article>}
 */}                </>
            }/>
        </section>
    )
}

export default FrontPage