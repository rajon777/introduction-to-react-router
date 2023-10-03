import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3>Navber</h3>
            <nav>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/about">About us</NavLink>
                <NavLink to = "/users">Users</NavLink>
                <NavLink to = "/posts">Posts</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
            </nav>
        </div>
    )
};
export default Header;