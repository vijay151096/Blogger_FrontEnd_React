import Like from '../images/like.png'
import Comment from '../images/comment.png'
import Follow from '../images/follow.png'
import '../styles/CommentsBar.css'


function commentsbar(){
    return(
        <div className="cb-row">
            <div className="cb-column">
                <img className="cb-align" src={Like} alt={"like"}/>
            </div>
            <div className="cb-column">
                <img className="cb-align" src={Comment} alt={"comment"}/>
            </div>
            <div className="cb-column">
                <img className="cb-align" src={Follow}  alt={"follow"}/>
            </div>
        </div>
    )
}
export default commentsbar;