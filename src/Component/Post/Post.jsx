import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) =>{
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding:'10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    const handlShowDatails = () =>{
        navigate(`/post/${id}`)
    }
    return(
        <div style={postStyle}>
            <h3>PostId:{id}</h3>
            <p>{title}</p>
            <button onClick={handlShowDatails}>Post Datails</button>
        </div>
    )
};
export default Post;