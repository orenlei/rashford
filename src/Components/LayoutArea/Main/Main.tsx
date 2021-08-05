import { NavLink } from "react-router-dom";
import Clock from "../../MainArea/Clock/Clock";
import Goals from "../../MainArea/Goals/Goals";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div>
            <div className="Main Box">
                <Clock />
                <NavLink to="Stats">Statistics</NavLink>
                <br />
                <NavLink to="Workout">Workout</NavLink>
                <br />
            </div>
            <br />
            <div className="imgR">
                <img src="https://media.giphy.com/media/3HoYzmvOT4aHsSOupT/giphy.gif" alt="yey"  />
            </div>
        </div>

    );
}

export default Main;
