import React,{useState, useEffect} from 'react'
import Style from './login.module.scss'
import Cookies from 'js-cookie';

function Login() {

    // change this to context
    const [loginData, setLoginData] = useState([])

    // set states needed by component
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameReq, setUsernameReq] = useState(true)
    const [passwordReq, setPasswordReq] = useState(true)
    const [message, setMessage] = useState("Indtast login oplysninger")

    // POST request with formdata from login input fields
    const sendLoginRequest = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
      
        let url = 'https://api.mediehuset.net/token';
        
        console.log(formData)
        fetch(url, {
          method: "POST",
          body : formData,  
        })

        .then(response => response.json())
        .then(json => handleSessionData(json))
        .catch(error => setMessage(error))
    }
    
    // function to handle session data (save data or set not authorized message)
    const handleSessionData = (key) => {
        setPassword("")
        setUsername("")

        if (!key.message){
            setLoginData(key)
            console.log(key)
            Cookies.set('token', JSON.stringify(key), {expires: 7})
            //sessionStorage.setItem('token', JSON.stringify(key)) 
        }
  
        if (key.message === "No authorization"){
            setMessage("Forkert brugernavn eller password - prøv igen")
        }
      }

      // function to log out
      const logOut = () => {
          setLoginData([])
          Cookies.remove('token')
          //sessionStorage.removeItem('token');
          setMessage("Du er nu logget ud")

         let timer = setTimeout(() => {
            setMessage("Indtast login oplysninger")
            clearTimeout(timer)
        }, 3500);
      }

      useEffect(() => {
          if (Cookies.get('token')){
              setLoginData(JSON.parse(Cookies.get('token')))
          }
      }, [])

      console.log(loginData)

      useEffect(() => {
        if (username == ""){
            setUsernameReq(true)
        }
        if (password == ""){
            setPasswordReq(true)
        }
        if (!username == ""){
            setUsernameReq(false)
        }
        if (!password == ""){
            setPasswordReq(false)
        }
      }, [username, password])

      // return html with forms and buttons
    return (
        <section className={Style.loginform}>
            <h4>{loginData && loginData.username ? `Du er logget ind som ${loginData.username}`: message}</h4>
            <form>
                <label>Email/brugernavn <span className={usernameReq && loginData && !loginData.user_id ? Style.required : Style.reqhidden}>*</span></label>
                <input className={usernameReq && loginData && !loginData.user_id ? Style.red : Style.green} type="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required placeholder="Indtast din email"></input>
                <label>Adgangskode <span className={passwordReq && loginData && !loginData.user_id ? Style.required : Style.reqhidden}>*</span></label>
                <input className={passwordReq && loginData && !loginData.user_id ? Style.red : Style.green} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Indtast din adgangskode"></input>
                {loginData && !loginData.user_id && <button className={Style.loginbtn} onClick={(e)=>sendLoginRequest(e)}>LOG IND</button>}
                {loginData && loginData.user_id && 
                    <button className={Style.logoutbtn} onClick={()=>logOut()}>LOG UD</button>
                }
            </form>
        </section>
    )
}

export default Login