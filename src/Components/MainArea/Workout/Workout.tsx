import { Typography } from "@material-ui/core";
import "./Workout.css";

function Workout(): JSX.Element {
  return (
    <div className="Workout Box">
        <Typography variant="h2">Workout</Typography>
     <p> {isSummer()?'Swimming & Matkot':isWinter()?'Running in the gym':'TRX & Meditation'}</p>
    </div>
  );

  function isSummer(): boolean {
    const date = new Date();
    const month = date.getMonth() + 1;
    return month === 6 || month === 7 || month === 8;
  }

  function isWinter(): boolean {
    const date = new Date();
    const month = date.getMonth() + 1;
    return month === 12 || month === 1 || month === 2;
  }
  
}


export default Workout;
