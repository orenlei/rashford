import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="Home">Home</NavLink>
            <br/>
            <NavLink to="Bio">Biography</NavLink>
            <br/>
            <NavLink to="About">About</NavLink>
            <br/>
            <NavLink to="Contact-us">Contact Us</NavLink>
            <br/>
            

        </div>
    );
}

export default Menu;
