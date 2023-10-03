import { Link } from "react-router-dom";

const User = ({user}) =>{
    const {name,id, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding:'10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return(
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>User Datails: </Link>
            <button><Link to={`/user/${id}`}>Click Me</Link></button>
        </div>
    )
};
export default User;