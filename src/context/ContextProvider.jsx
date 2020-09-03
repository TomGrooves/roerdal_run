import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  // Here goes all states, functions etc. that need to be part of the global scope.
  // state til at gemme login data
  const [loginData, setLoginData] = useState([])
  const [pageData, setPageData] = useState([])
  const [allPageData, setAllPageData] = useState([])
  const [allRunData, setAllRunData] = useState([])
  const [selectedRunID, setSelectedRunID] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [allAttendants, setAllAttendants] = useState([])

  // useEffect der gemmer logindata fra sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")))
    }
  }, [setLoginData])

  // Funktion til at lave fetch - sendes med ind i de komponenter der skal fetche
  async function doFetch(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  // Fetch page data function 
  const getPageContent = async (page) => {
    let url = `https://api.mediehuset.net/rordal/pages/${page}`
    let res = await doFetch(url)
    setPageData(res)
  }
  const getAllPageContent = async (page) => {
    let url = `https://api.mediehuset.net/rordal/pages`
    let res = await doFetch(url)
    setAllPageData(res)
  }
  const getAllRuns = async () => {
    let url = `https://api.mediehuset.net/rordal/run`
    let res = await doFetch(url)
    setAllRunData(res)
  }
  const getAllAttendants = async () => {
    let url = `https://api.mediehuset.net/rordal/registrations`
    let res = await doFetch(url)
    setAllAttendants(res)
  }


  // Navbar options
  const navOptions = {
    height: "50px",
    navlinks: [
      { main: "OM RØRDAL RUN" },
      { main: "TILMELDING" },
      { main: "DISTANCER" },
      { main: "DELTAGERE" },
      { main: "KOMMENTER" },
      { main: "FORSIDE" }
    ],
    search: false,
    login: true,
  }

  useEffect(() => {
    getAllPageContent()
    getAllRuns()
  }, [])

  console.log(allPageData)


  // Return AppContext.Provider with value={ALL THE VALUES}
  return (
    <AppContext.Provider value={{ 
      getPageContent, 
      pageData, 
      setPageData, 
      doFetch, 
      loginData, 
      setLoginData, 
      navOptions, 
      allRunData, 
      setSelectedRunID, 
      selectedRunID, 
      submitted, 
      setSubmitted, 
      allAttendants,
      setAllAttendants,
      getAllAttendants}}>
      {children}
    </AppContext.Provider>
  );
}

// Now import {AppContextProvider} from './context/ContextProvider'; in Top Hierachi (index.js)
// Then import { AppContext } from "../../context/ContextProvider" inside component that subscribes &  declare it with: const {testState, setTestState } = useContext(AppContext);

export { AppContext, AppContextProvider } 