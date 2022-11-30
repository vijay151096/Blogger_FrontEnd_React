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

    const editBlog = async() => {
        document.getElementById("NewBlogDiv").style.display = "block";
        document.getElementById("nb_title").value = blog.title
        document.getElementById("nb_body").value = blog.body
        document.getElementById("nb_tags").value = blog.tags
        document.getElementById("nb_blogId").value = blog._id
        document.getElementById("nb_blogUserId").value = blog.user._id
    }

    return(
        <>
            <div className="ed-row">
                <div className="ed-column">
                    <img className="ed-align" onClick={editBlog} src={Edit} alt={"edit"}/>
                </div>
                <div className="ed-column">
                    <img className="ed-align" onClick={deleteBlog} src={Delete} alt={"Delete"}/>
                </div>
            </div>
        </>
    )
}

export default EditDelete