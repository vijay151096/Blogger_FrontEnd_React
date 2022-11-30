import React, {useContext, useEffect} from 'react'
import '../styles/UserDiv.css'
import globalContext from "../context/GlobalContext";
import axios from "axios";
import env from '../config/config'
import Account from '../images/account.png'

const UserDiv = () => {

    const { setLoggedInUser, loggedInUser, loggedInUserId, loggedInUserToken, setLoggedInUserToken, setLoggedIn} = useContext(globalContext)
    useEffect( () => {
        getUserDetail()
        async function getUserDetail() {
            var url = `${env.SERVER_URL}/user/${loggedInUserId}`
            const headers = {"Authorization": `Bearer ${loggedInUserToken}`};
            const response = await axios.get(url, {headers})
            if (response.status === 200) {
                setLoggedInUser(response.data.data)
            }
        }
         }, [])

    const logout = () => {
        document.cookie = 'token=;'
        setLoggedInUser({})
        setLoggedInUserToken('')
        setLoggedIn(false)

    }
    return(
        <>
            <div className="ud-row ud-borderDiv ud-allign">
                <div className="ud-column" >
                    <img width="148" height="148" alt="Person Photo"
                         src="https://purepng.com/public/uploads/large/purepng.com-ironmanironmansuperheromarvel-comicscharactermarvel-studiosrobert-downey-jrtony-stark-1701528611659shunk.png" />
                </div>
                <div className="ud-column">
                    <h1>Bloggers</h1>
                </div>
                <div className="ud-column ud-align2">
                    <header>
                        <h1>{loggedInUser.name}</h1>
                        {loggedInUser.followers} Followers <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </header>
                    <main>
                        <p></p>
                    </main>
                    <footer><span><i className="fa-brands fa-github"></i>{loggedInUser.email}</span>    <span><i
                        className="fa-solid fa-building"></i>{loggedInUser.role}  </span>
                    </footer>
                    <main>
                        <p></p>
                    </main>
                    <div>
                        <img className="ud-imgalign" onClick={logout} src={Account} /> Logout
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserDiv;
