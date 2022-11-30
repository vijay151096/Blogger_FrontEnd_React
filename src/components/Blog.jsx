import '../styles/blog.css'
import Commentsbar from "./CommentsBar";
import { useNavigate } from "react-router-dom";

function Blog({key, blog}){

    let navigate = useNavigate();
    const showBlogDetailView = () => {
        navigate(`/blog/${blog._id}`)
    }

    return(
        <div key={key} className="borderDiv budctu allign">
            <header><h1><div onClick={showBlogDetailView}>{blog.title}</div></h1><span>{blog.body}</span></header>
            <main><p>{blog.user.name}</p></main>
            <Commentsbar blog = {blog}/>
        </div>
    )
}

export default Blog