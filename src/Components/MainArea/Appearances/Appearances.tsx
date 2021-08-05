import { Typography } from "@material-ui/core";
import "./Appearances.css";

interface AppearancesProps {
	team: string
    numOfAppearances: number
}

function Appearances(props: AppearancesProps): JSX.Element {
    return (
        <div className="Appearances Box2">
            <Typography variant="h3">Number of appearances</Typography>
			<p>{props.team} - {props.numOfAppearances}</p>
        </div>
    );
}

export default Appearances;
