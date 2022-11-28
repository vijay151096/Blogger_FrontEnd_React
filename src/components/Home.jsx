import UserDiv from "./UserDiv";
import BlogDetails from "./BlogDetails";
import AddBlog from "../images/add.png"
import NewBlog from "./NewBlog";

const Home = () => {

    const showNewBlog = () => {
        document.getElementById("NewBlogDiv").style.display = "block";
    }

    return(
        <div>
            <UserDiv />
            <img className="common-allign" src={AddBlog} alt={"Add Blog"} onClick={showNewBlog} />
            <NewBlog />
            <BlogDetails />
        </div>
    )
}
export default Home