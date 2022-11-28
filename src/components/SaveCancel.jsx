import Save from "../images/save.png";
import Cancel from "../images/cancel.png";
import axios from "axios";
import {useContext, useState} from "react";
import globalContext from "../context/GlobalContext";

function SaveCancel(){

    const [blogs, setBlogsDetails] = useState([])
    const {loggedInUserToken, loggedInUserId} = useContext(globalContext)

    const hideNewBlog = () => {
        document.getElementById("NewBlogDiv").style.display = "none";
    }

    const saveNewBlog = () => {
        async function getBlogs() {
            //var url = "https://bloggernodejs.herokuapp.com/blog"
            let url = "http://localhost:9005/blog"
            let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
            let data = {
                title: document.getElementById("nb_title").value,
                body: document.getElementById("nb_body").value,
                tags: document.getElementById("nb_tags").value,
                user: loggedInUserId,

            }
            const response = await axios.post(url, data, { headers })
            // const response = await axios.post(url, body)
            // const response = await axios({
            //     url: url,
            //     method: "post",
            //     data,
            //     headers
            // })
            if (response.status === 201) {
                setBlogsDetails([response.data.data.response, ...blogs])
            }
        }
        getBlogs();
        document.getElementById("NewBlogDiv").style.display = "none";
    }

    return(
        <div className="cb-row">
            <div className="cb-column">
                <img className="cb-align" onClick={saveNewBlog} src={Save} alt={"save"}/>
            </div>
            <div className="cb-column">
                <img className="cb-align" onClick={hideNewBlog} src={Cancel} alt={"cancel"}/>
            </div>
        </div>
    )
}
export default SaveCancel