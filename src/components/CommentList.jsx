import Comment from "./Comment";

function CommentList({commentDetails}){

    if(commentDetails &&  commentDetails.length > 0) {
        var commentsList = commentDetails.map(com => {
            return <div> <Comment comment={com}/> </div>
        })
    } else {
        return <div>No Comments Yet</div>
    }
    return (
        <div>{commentsList}</div>
    )
}
export default CommentList;