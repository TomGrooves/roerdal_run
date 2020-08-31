import React from 'react'
import Style from './time.module.scss'

export function timeStampToDate(timestamp) {
    let date = new Date(timestamp * 1000)
    let converted = date.toLocaleString("en-GB")
    return converted 
}

export function getDate(){
    let date = new Date;
    return date
}

export function dateToTimestamp(unixdate) {
    let date = new Date(unixdate);
    let converted = date.getTime() / 1000
    return converted
}

export function timestampToArray(timestamp) {
    const milliseconds = timestamp * 1000
    const date = new Date(milliseconds)
    const dateArray = [
        {name: "year", item: date.getFullYear()},
        {name: "month", item: date.getMonth() + 1},
        {name: "day", item: date.getDay()},
        {name: "hour", item: date.getHours()},
        {name: "minutes", item: date.getMinutes()},
        {name: "seconds", item: date.getSeconds()},
    ]
    return dateArray
}

export function getClock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let clock = <span>
        {hours < 10 ? "0" + hours + ":" : hours + ":"}
        {minutes < 10 ? "0" + minutes + ":" : minutes + ":"}
        {seconds < 10 ? "0" + seconds : seconds}
    </span>

    return clock
}
