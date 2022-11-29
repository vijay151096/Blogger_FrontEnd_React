import {useContext, useEffect, useState} from "react";
import globalContext from "../context/GlobalContext";
import axios from "axios";
import Blog from "./Blog";
import env from '../config/config'

const BlogDetails = () => {

    const [blogs, setBlogsDetails] = useState([])
    const {loggedInUserToken} = useContext(globalContext)
    useEffect( () => {
        async function getBlogs() {
            //var url = "https://bloggernodejs.herokuapp.com/blog"
            var url = `${env.SERVER_URL}/blog/search`
            var queryParam = "?sort=-createdAt"
            url += queryParam
            var headers = {"Authorization": `Bearer ${loggedInUserToken}`}
            const response = await axios.get(url, {headers})
            if (response.status === 200) {
                setBlogsDetails(response.data.data.response)
            }
        }
        getBlogs()
    }, [blogs] )


    const blogsContent = blogs.map(blog => {
        return <Blog key={blog._id} blog={blog}/>
    })

    return (
        <div>
            {blogsContent}
        </div>

    )
}

export default BlogDetails