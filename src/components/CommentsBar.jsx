import Like from '../images/like.png'
import Comment from '../images/comment.png'
import Follow from '../images/follow.png'
import '../styles/CommentsBar.css'
import axios from "axios";
import {useContext} from "react";
import globalContext from "../context/GlobalContext";
import EditDelete from "./EditDelete";
import env from '../config/config'


function CommentsBar({blog}){

    const {loggedInUserToken} = useContext(globalContext)

    const increaseLike = async() => {
        let url = `${env.SERVER_URL}/blog/${blog._id}`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        let data = {
            like: blog.like + 1
        }
        await axios.put(url, data, { headers })
    }
    const increaseFollowers = async() => {
        let url = `${env.SERVER_URL}/user/${blog.user._id}`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        let data = {
            followers: blog.user.followers + 1
        }
        await axios.put(url, data, { headers })
    }

    return(
        <div className="cb-row">
            <div className="cb-column">
                <img className="cb-align" onClick={increaseLike} src={Like} alt={"like"}/> {blog.like}
            </div>
            <div className="cb-column">
                <img className="cb-align" src={Comment} alt={"comment"}/> {blog.like}
            </div>
            <div className="cb-column">
                <img className="cb-align" onClick={increaseFollowers} src={Follow}  alt={"follow"}/> {blog.user.followers}
            </div>
            <EditDelete blog={blog}/>
        </div>
    )
}
export default CommentsBar