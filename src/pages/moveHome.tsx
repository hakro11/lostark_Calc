import { Link } from "react-router-dom";
import '../styles/moveHome.css';

function MoveHome() {
    return (
        <>
            <Link to={'/'}>
                <button>
                    처음으로
                </button>
            </Link>
        </>
    )
}

export default MoveHome;