import '../styles/blog.css'
import Commentsbar from "./CommentsBar";

function Blog({key, blog}){
    return(
        <div key={key} className="borderDiv budctu allign" href="/6">
            <header><h1><div>{blog.title}</div></h1><span>{blog.body}</span></header>
            <main><p>{blog.user.name}</p></main>
            <Commentsbar blog = {blog}/>
        </div>
    )
}

export default Blog