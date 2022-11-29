import React, {useContext} from "react"

import GlobalContext from './context/GlobalContext'
import Login from "./components/login";
import Home from "./components/Home"
import "./styles/common.css"


function App() {

    const { loggedIn } = useContext(GlobalContext)
    if(!loggedIn){
        return (
           <Login />
        )
    } else {
        return(
            <Home />
        )
    }
}

export default App;
