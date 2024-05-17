import { Link } from "react-router-dom";
import { TitlePage } from "./TitlePage";

export function Navbar(){
    return(
        <>
        <TitlePage/>

        <Link to="/projects">
            <button>Projects</button>
        </Link>

        <Link to="/second">
            <button>Second</button>
        </Link>    

        <Link to="/Tictack">
            <button>tic</button>
        </Link>  
        </>
    )
}
