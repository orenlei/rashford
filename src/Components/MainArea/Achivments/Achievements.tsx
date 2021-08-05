import { Typography } from "@material-ui/core";
import "./Achievements.css";

function Achievements(): JSX.Element {
    const achievements = [{ "id": 1, "season": "15/16", "achievement": "FA Cup Winner" },
    { "id": 2, "season": "16/17", "achievement": "Europa League Winner" },
    { "id": 3, "season": "16/17", "achievement": "English Super Cup Winner" },
    { "id": 4, "season": "17/18", "achievement": "English League Cup Winner" }]

    return (
        <div className="Achievements Box2">
            <Typography variant="h5">Achievements</Typography>
            {achievements.map(a => <span key={a.id}>{a.season}, {a.achievement}, </span>)}
        </div>
    );
}

export default Achievements;
