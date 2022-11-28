import React, {useContext, useEffect} from 'react'
import '../styles/UserDiv.css'
import globalContext from "../context/GlobalContext";
import axios from "axios";

const UserDiv = () => {

    const { setLoggedInUser, loggedInUser, loggedInUserId, loggedInUserToken } = useContext(globalContext)

    console.log(loggedInUserId);
    useEffect( () => {
        getUserDetail()
        async function getUserDetail() {
            //var url = "https://bloggernodejs.herokuapp.com/blog"
            var url = `http://localhost:9005/user/${loggedInUserId}`
            const headers = {"Authorization": `Bearer ${loggedInUserToken}`};
            const response = await axios.get(url, {headers})
            if (response.status === 200) {
                setLoggedInUser(response.data.data)
            }
        }
         }, [])

    return(
        <>
            {console.log(loggedInUser)}
            <div className="ud-budctu ud-borderDiv ud-allign">
                <img width="148" height="148" alt="Person Photo"
                     src="https://purepng.com/public/uploads/large/purepng.com-ironmanironmansuperheromarvel-comicscharactermarvel-studiosrobert-downey-jrtony-stark-1701528611659shunk.png" />
                    <div className=" ud-budctu ud-allign">
                        <header>
                            <h1>{loggedInUser.name}</h1>
                            <a target="_blank" href="https://github.com/pedr0d1as">GITHUB <i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </header>
                        <main>
                            <p></p>
                        </main>
                        <footer><span><i className="fa-brands fa-github"></i>{loggedInUser.email}</span><span><i
                            className="fa-solid fa-building"></i>Hexis</span><span><i className="fa-solid fa-user-group"></i>{loggedInUser.website}</span>
                        </footer>
                    </div>
            </div>
        </>
    )
}

export default UserDiv;
