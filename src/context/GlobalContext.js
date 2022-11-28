import React, { useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUserId, setLoggedInUserId] = useState("")
    const [loggedInUserToken, setLoggedInUserToken] = useState("")
    const [loggedInUser, setLoggedInUser] = useState({})

    return (
        <GlobalContext.Provider value={{
            loggedIn, setLoggedIn, loggedInUser, setLoggedInUser, loggedInUserToken, setLoggedInUserToken, loggedInUserId, setLoggedInUserId
        }}>
            <div className="globalContext">
                {children}
            </div>
        </GlobalContext.Provider>
    )
}

export default GlobalContext;