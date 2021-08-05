import { Typography } from "@material-ui/core";
import "./Goals.css";

interface GoalsProps {
team: string;
numOfGoals: number;
}

function Goals(props: GoalsProps): JSX.Element {
  return (
    <div className="Goals Box2">
      <Typography variant="h3">Goals</Typography>
      <p>{props.team} - {props.numOfGoals}</p>
    </div>
  );
}

export default Goals;
