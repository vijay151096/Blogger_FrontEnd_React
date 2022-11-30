import React, {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";
import env from '../../config/config'

const FormButton = props => {

    const { setLoggedIn, setLoggedInUserId, setLoggedInUserToken } = useContext(GlobalContext)
    return (
        <div id="button" className="row">
            <button onClick={() => login(setLoggedIn, setLoggedInUserId, setLoggedInUserToken)}>{props.title}</button>
        </div>
    )
}


const login = async(setLoggedIn, setLoggedInUserId, setLoggedInUserToken) => {
    var email = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var url = `${env.SERVER_URL}/auth/login`
    const response = await axios.post(url, {email, password}, {withCredentials: true})
    if(response.status === 200){
        setLoggedIn(true)
        setLoggedInUserId(response.data.data.id)
        setLoggedInUserToken(response.data.data.token)
    }
}

export default FormButton
