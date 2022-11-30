import '../styles/NewBlog.css'
import SaveCancel from "./SaveCancel";

function NewBlog(){
    return(
        <div id="NewBlogDiv" className="borderDiv budctu allign" href="/6">
            Title :
            <h1><input type="input" id="nb_title" className="input_text" placeholder="Enter the Title"/></h1>
            Content :
            <span><textarea id="nb_body"  className="nb-bodysizing input_text" placeholder="Enter the Body" /></span>
            Tags :
            <h1><input type="input" id="nb_tags" className="input_text" placeholder="Enter the Tags"/></h1>
            <SaveCancel />
            <input type="input" className="input_text" value="false" id="nb_blogUserId" hidden="hidden"/>
            <input type="input" className="input_text" value="" id="nb_blogId" hidden="hidden"/>
        </div>
    )
}

export default NewBlog