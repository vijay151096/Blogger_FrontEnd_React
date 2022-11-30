import Save from "../images/save.png";
import Cancel from "../images/cancel.png";
import axios from "axios";
import {useContext, useState} from "react";
import globalContext from "../context/GlobalContext";
import env from '../config/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SaveCancel(){

    const [blogs, setBlogsDetails] = useState([])
    const {loggedInUserToken, loggedInUserId} = useContext(globalContext)

    const cleanNewBlogDiv = () => {
        document.getElementById("nb_title").value = ""
        document.getElementById("nb_body").value = ""
        document.getElementById("nb_tags").value = ""
    }

    const hideNewBlog = () => {
        cleanNewBlogDiv();
        document.getElementById("NewBlogDiv").style.display = "none";
    }

    async function createBlogs() {
        let url = `${env.SERVER_URL}/blog`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        let data = {
            title: document.getElementById("nb_title").value,
            body: document.getElementById("nb_body").value,
            tags: document.getElementById("nb_tags").value,
            user: loggedInUserId,

        }
        const response = await axios.post(url, data, { headers })
        if (response.status === 201) {
            cleanNewBlogDiv()
            setBlogsDetails([response.data.data.response, ...blogs])
            toast("Successfully saved");
        } else {
            toast("Unable to Create New Blog")
            alert("Unable to Create New Blog")
        }
    }
    async function editBlogs(blogId) {
        let url = `${env.SERVER_URL}/blog/${blogId}`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        let data = {
            title: document.getElementById("nb_title").value,
            body: document.getElementById("nb_body").value,
            tags: document.getElementById("nb_tags").value,
            user: document.getElementById("nb_blogUserId").value,
        }
        try {
            const response = await axios.put(url, data, {headers})
            if (response.status === 201) {
                cleanNewBlogDiv()
                setBlogsDetails([response.data.data.response, ...blogs])
            }
            toast("Successfully saved");
        } catch(e){
            toast("Unable to Edit Blog");
            alert("Unable to Edit Blog")
        }
    }

    const saveNewBlog = () => {
        let blogId = document.getElementById("nb_blogId").value
        if(!blogId) {
            createBlogs();
        } else {
            editBlogs(blogId)
            document.getElementById("nb_blogId").value = ""
        }
        document.getElementById("NewBlogDiv").style.display = "none";
    }

    return(
        <>
            <div className="cb-row">
                <div className="cb-column">
                    <img className="cb-align" onClick={saveNewBlog} src={Save} alt={"save"}/>
                </div>
                <div className="cb-column">
                    <img className="cb-align" onClick={hideNewBlog} src={Cancel} alt={"cancel"}/>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}
export default SaveCancel