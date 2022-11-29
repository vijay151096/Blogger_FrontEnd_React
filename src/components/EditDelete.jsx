import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import '../styles/EditDelete.css'
import axios from "axios";
import {useContext} from "react";
import globalContext from "../context/GlobalContext";
import env from '../config/config'

function EditDelete({blog}){

    const {loggedInUserToken} = useContext(globalContext)

    const deleteBlog = async() => {
        let url = `${env.SERVER_URL}/blog/${blog._id}`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        await axios.delete(url, { headers })

    }

    return(
        <>
            <div className="ed-row">
                <div className="ed-column">
                    <img className="ed-align" src={Edit} alt={"edit"}/>
                </div>
                <div className="ed-column">
                    <img className="ed-align" onClick={deleteBlog} src={Delete} alt={"Delete"}/>
                </div>
            </div>
        </>
    )
}

export default EditDelete