import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../../components/gridbox/gridbox'
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './attendingpage.module.scss'
import {compareString, compareNumber} from '../../functions/compare/compare'

function AttendingPage() {
    const { getPageContent, setPageData, pageData, getAllAttendants, allAttendants} = useContext(AppContext);
    const [sorted, setSorted] = useState([])

    useEffect(() => {
        getPageContent(5)
        setPageData(pageData)
        getAllAttendants()
    }, [])

    if (sorted.length == 0 && allAttendants.items){
        setSorted(allAttendants.items)
    }

    const getRunName = (id) => {
        switch(id) {
            case "1":
                return "10 Km"
            case "2":
                return "5 Km"
            case "3":
                return "1 Mile"   
            default :
                return "Går istedet"
            }
    }

    const sort = (key, order) => {
        console.log(sorted)
        if (!isNaN(key)){  
            console.log("It is a number")          
            let sortedArray = allAttendants.items.map((item) => {return item})
            sortedArray = sortedArray.sort(compareNumber(key, order))
            setSorted(sortedArray)
        }
        else{
            console.log("It is not a number")
            let sortedArray = allAttendants.items.map((item) => {return item})
            sortedArray = sortedArray.sort(compareString(key, order))
            setSorted(sortedArray)
        }
    }

    return (
        <section className={Style.mainContainer}>
            <Carousel />
            <GridBox width="80%" align={"start"} child={
                <div className={Style.header}>
                    <h2>{pageData.item && pageData.item.title}</h2>
                    <p>{pageData.item && pageData.item.teaser}</p>
                    {pageData.item && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pageData.item.content) }}></p>}
                </div>
            } />

            <div className={Style.searchContainer}>
                <select>
                    <option>Alle</option>
                    <option>1 Mile</option>
                    <option>5 Km</option>
                    <option>10 km</option>
                </select>
                <select>
                    <option>Mænd/kvinder</option>
                    <option>Mænd</option>
                    <option>Kvinder</option>
                </select>
                <select>
                    <option>Søg startnr., navn eller</option>
                    <option>Start nr</option>
                    <option>Navn</option>
                    <option>Efternavn</option>
                    <option>By</option>
                </select>
            </div>

            <div className={Style.listContainer}>
                <div className={Style.listGridItem}>
                    <div><p>Startnr</p><button onClick={()=>{sort("id","asc")}}>Up</button><button onClick={()=>{sort("id","desc")}}>Down</button></div>
                    <div><p>Deltager</p><button onClick={()=>{sort("firstname","asc")}}>Up</button><button onClick={()=>{sort("firstname","desc")}}>Down</button></div>
                    <div><p>By</p><button onClick={()=>{sort("city","asc")}}>Up</button><button onClick={()=>{sort("city","desc")}}>Down</button></div>
                    <div><p>Distance</p><button onClick={()=>{sort("run_id","asc")}}>Up</button><button onClick={()=>{sort("run_id","desc")}}>Down</button></div>
                </div>

               {sorted.length > 0 && sorted.map((item, index) => {
                   return (
                   <ul key={index} className={Style.listGridItem}>
                        <li>{item.id}</li>
                        <li>{item.firstname + " " + item.lastname}</li>
                        <li>{item.city}</li>
                        <li>{getRunName(item.run_id)}</li>
                    </ul>
                   )
                })}

            </div>
        </section>
    )
}

export default AttendingPage