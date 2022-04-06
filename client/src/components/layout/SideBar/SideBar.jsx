import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
   
    return (
      
            <ul className="navbar-list">
                <li><Link className="navbar-link" to={"/"}>Home</Link></li>
                <li><Link className="navbar-link" to={"/Workspace"}>Workspace</Link></li>
                <li><Link className="navbar-link" to={"/AddProcess"}>Add Process</Link></li>
            </ul>
        
    );
};

export default SideBar;