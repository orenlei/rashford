import { Typography } from "@material-ui/core";
import "./Assists.css";

interface AssistsProps {
    team: string;
    numOfAssists: number;
}

function Assists(props:AssistsProps): JSX.Element {
    return (
        <div className="Assists Box2">
            <Typography variant="h3">Assists</Typography>
            <p>{props.team} - {props.numOfAssists}</p>
        </div>
    );
}

export default Assists;
