import { Typography } from "@material-ui/core";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<Logo/>
            <Typography variant="h3">Marcus Rashford</Typography>
        </div>
    );
}

export default Header;
