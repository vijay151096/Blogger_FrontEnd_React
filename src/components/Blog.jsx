import '../styles/blog.css'
import Commentsbar from "./commentsbar";

function NewBlog({key, blog}){
    return(
        <div key={key} className="borderDiv budctu allign" href="/6">
            <header><h1>{blog.title}</h1><span>{blog.body}</span></header>
            <main><p>{blog.user.name}</p></main>
            <Commentsbar />
        </div>
    )
}

export default NewBlog