import { useLoaderData } from "react-router-dom";

const UserDatails = () =>{
    const user = useLoaderData();
    const {name, website, email, phone} = user;
    return(
        <div>
            <h2>Datails user:{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
};
export default UserDatails;