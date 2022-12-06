import {Redirect, useParams} from "react-router-dom";
import env from "../config/config";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import globalContext from "../context/GlobalContext";
import Blog from "./Blog";
import CommentList from "./CommentList";
import Back from '../images/back.png'
import '../styles/BlogDetailView.css'

const BlogDetailView = () => {
    let {id} = useParams();
    let blogId = id
    const {loggedInUserToken} = useContext(globalContext)
    let [blogDetails, setBlogDetails] = useState({})
    let [commentsDetails, setCommentsDetails] = useState([])

    async function getBlogDetails() {
        let url = `${env.SERVER_URL}/blog/${blogId}`
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        const response = await axios.get(url, {headers})
        setBlogDetails(response.data.data)
    }

    useEffect( () => {
            getBlogDetails()
            getCommentsDetails()
        })

    async function getCommentsDetails() {
        let url = `${env.SERVER_URL}/blog/${blogId}/comment/search`
        let queryParam = "?sort=-createdAt"
        url += queryParam
        let headers = {"Authorization": `Bearer ${loggedInUserToken}`}
        const response = await axios.get(url, {headers})
        setCommentsDetails(response.data.data.response)
    }

    const routeBack = () => {

    }

    if(Object.keys(blogDetails).length > 0){
        return (
            <div>
                <img className="bdv-align bdv-column" onClick={routeBack} src={Back} alt={"Back"}/>
                <div className="bdv-row bdv-align-blog">
                <Blog className="bdv-column" blog={blogDetails} />
                </div>
                <CommentList commentDetails={commentsDetails}/>
            </div>
        )
    }


}

export default BlogDetailView