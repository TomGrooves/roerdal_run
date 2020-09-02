import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../context/ContextProvider"
import GridBox from '../../components/gridbox/gridbox'
import DOMPurify from 'dompurify'
import Carousel from '../../components/carousel/carousel'
import Style from './attendingpage.module.scss'
import {compareString, compareNumber} from '../../functions/compare/compare'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

function AttendingPage() {
    const { getPageContent, setPageData, pageData, getAllAttendants, allAttendants} = useContext(AppContext);
    const [sorted, setSorted] = useState([])
    const [query, setQuery] = useState("Søg..")

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

    async function doSearch() {
        try {
            const request = await fetch('https://api.mediehuset.net/rordal/search/' + query);
            const res = await request.json();
            console.log(res)
            let sortedArray = res.items.map((item) => {return item})
            setSorted(sortedArray)
        } catch (error) {
            console.log('Error', error);
        }
    }

    const sortString = (key, order) => {
        console.log(sorted)
            console.log("It is not a number")
            let sortedArray = allAttendants.items.map((item) => {return item})
            sortedArray = sortedArray.sort(compareString(key, order))
            setSorted(sortedArray)
    }

    
    const sortNumber = (key, order) => {
        console.log(sorted)
            console.log("It is a number")          
            let sortedArray = allAttendants.items.map((item) => {return item})
            sortedArray = sortedArray.sort(compareNumber(key, order))
            setSorted(sortedArray)
    }

    const filterArray = (key, value) => {
        let sortedArray = allAttendants.items.map((item) => {return item})
        var res = sortedArray.filter(obj=>obj[key].toLowerCase() ===`${value}`);
        setSorted(res)
    }


    return (
        <section className={Style.mainContainer}>
            <Carousel />
                <div className={Style.topContainer}>
                    <h2>{pageData.item && pageData.item.title} til Rørdal Run</h2>
                    {pageData.item && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pageData.item.content) }}></p>}
                </div>
        
            <div className={Style.searchContainer}>
                <select onChange={(e)=>{filterArray("run_id", e.target.value)}}>
                    <option>Alle</option>
                    <option value="3">1 Mile</option>
                    <option value="2">5 Km</option>
                    <option value="1">10 Km</option>
                </select>
                <select onChange={(e)=>{filterArray("gender", e.target.value)}}>
                    <option>Mænd/kvinder</option>
                    <option value={"m"}>Mænd</option>
                    <option value={"f"}>Kvinder</option>
                </select>
                <div>
                    <input value={query} onClick={()=>{setQuery("")}} onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}></input>
                    <button onClick={()=>{doSearch()}}>Søg</button>
                </div>
            </div>

            <div className={Style.listContainer}>
                <div className={Style.listGridItem}>
                    <div><p>Startnr</p><RiArrowUpSLine onClick={()=>{sortNumber("id","asc")}}>Up</RiArrowUpSLine><RiArrowDownSLine onClick={()=>{sortNumber("id","desc")}}>Down</RiArrowDownSLine></div>
                    <div><p>Deltager</p><RiArrowUpSLine onClick={()=>{sortString("firstname","asc")}}>Up</RiArrowUpSLine><RiArrowDownSLine onClick={()=>{sortString("firstname","desc")}}>Down</RiArrowDownSLine></div>
                    <div><p>By</p><RiArrowUpSLine onClick={()=>{sortString("city","asc")}}>Up</RiArrowUpSLine><RiArrowDownSLine onClick={()=>{sortString("city","desc")}}>Down</RiArrowDownSLine></div>
                    <div><p>Distance</p><RiArrowUpSLine onClick={()=>{sortString("run_id","asc")}}>Up</RiArrowUpSLine><RiArrowDownSLine onClick={()=>{sortString("run_id","desc")}}>Down</RiArrowDownSLine></div>
                </div>
                <ul className={Style.listGridItem}>
                        <li>Start nr:</li>
                        <li>Navn:</li>
                        <li>By:</li>
                        <li>Distance:</li>
                    </ul>
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