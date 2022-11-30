import React, {useContext} from "react"

import GlobalContext from './context/GlobalContext'
import Login from "./components/login";
import Home from "./components/Home"
import "./styles/common.css"
import env from "./config/config";
import axios from "axios";

function App() {

    const { loggedIn, setLoggedIn, loggedInUserToken, setLoggedInUserToken, setLoggedInUser } = useContext(GlobalContext)
    const loadLoggedInUser = async() => {
        if(!loggedIn){
            let cookie = document.cookie;
            let cookieToken = cookie.split("token=")[1].split(";")[0];
            if(cookieToken && cookieToken != '') {
                let url = `${env.SERVER_URL}/user/me`
                setLoggedInUserToken(cookieToken);
                let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
                const response = await axios.get(url, {headers})
                setLoggedIn(true);
                setLoggedInUser(response.data)
            }
        }
    }


    loadLoggedInUser()
    if(!loggedIn){
        return( <Login /> )
    } else {
        return( <Home /> )
    }
}

export default App;
