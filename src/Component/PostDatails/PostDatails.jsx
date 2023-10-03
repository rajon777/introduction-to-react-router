import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDatails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const { id, title, body } = post;
    const navigate = useNavigate();
    console.log(postId)
    const handlGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post datails about:{id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handlGoBack}>Go Back</button>

        </div>
    )
};
export default PostDatails;