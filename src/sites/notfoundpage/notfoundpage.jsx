import React, {useContext} from 'react'
import { AppContext } from "../../context/ContextProvider"

function NotFoundPage(){
    const {doFetch} = useContext(AppContext);

    return (
        <div>404 not found</div>
    )
}

export default NotFoundPage