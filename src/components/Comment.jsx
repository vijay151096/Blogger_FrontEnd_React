import Commentsbar from "./CommentsBar";

function Comment({comment}){
    return(
        <div className="borderDiv budctu allign">
            <header><h1><div>{comment.rating}</div></h1><span>{comment.body}</span></header>
            <main><p>{comment.user}</p></main>
        </div>
    )
}
export default Comment