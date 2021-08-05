import { Redirect, Route, Switch } from "react-router-dom";
import Assists from "../../MainArea/Assists/Assists";
import Goals from "../../MainArea/Goals/Goals";
import Stats from "../../MainArea/Stats/Stats";
import Workout from "../../MainArea/Workout/Workout";
import About from "../../MenuArea/About/About";
import Bio from "../../MenuArea/Bio/Bio";
import ContactUs from "../../MenuArea/ContactUs/ContactUs";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/Home" component={Main} exact/>
                <Route path="/Stats" component={Stats} exact/>
                <Route path="/Workout" component={Workout} exact/>
                <Route path="/About" component={About} exact/>
                <Route path="/Bio" component={Bio} exact/>
                <Route path="/Contact-us" component={ContactUs} exact/>
                <Redirect path="/" to="/home" exact/>
                <Route component={Page404} exact/> 
            </Switch>
        </div>
    );
}

export default Routing;
