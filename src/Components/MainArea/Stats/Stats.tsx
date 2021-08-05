import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Achievements from "../Achivments/Achievements";
import Appearances from "../Appearances/Appearances";
import Assists from "../Assists/Assists";
import Goals from "../Goals/Goals";
import "./Stats.css";

function Stats(): JSX.Element {
    return (
        <div className="Stats">
            <div className="MUFC Box">
                <Typography variant="h4">Statistics for Manchester United</Typography>
                <Goals team="MUFC" numOfGoals={88}/>
                <Assists team="MUFC" numOfAssists={56}/>
                <Appearances team="MUFC" numOfAppearances={271}/>
                <Achievements/>
            </div>
            <div className="England Box">
                <Typography variant="h4">Statistics for England's national team</Typography>
                <Goals team="England" numOfGoals={12}/>
                <Assists team="MUFC" numOfAssists={6}/>
                <Appearances team="MUFC" numOfAppearances={46}/>
            </div>
        </div>
    );
}

export default Stats;
