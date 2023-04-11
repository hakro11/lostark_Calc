import { useState, useEffect, SetStateAction } from "react";
import '../styles/user.css';
import MoveHome from "./moveHome";
import { CatchUserName } from "../utils/catchUserName";
import { getUserSkillInfo, getUserInfo } from "../utils/getUserInfo";


function User() {
    // State
    const [userCharInfo, setUserCharInfo]:any= useState(),
        [userStats, setUserStats] = useState([]),
        [userSkillInfo, setUserSkillInfo] = useState([]),
        [loading, setLoading] = useState(true);

    // SearchParm
    const user :string | null = CatchUserName();

    useEffect(() => {
        getUserInfo(user, setUserCharInfo, setUserStats);
        getUserSkillInfo(user, setUserSkillInfo, setLoading);
    }, [user]);

    if (userCharInfo) {
        return (
            <>
                <h3>캐릭명 : {user}</h3>
                <div className="info">
                    {userCharInfo}
                    <div className="stats">
                        {userStats}
                    </div>
                </div>
                <div>{userSkillInfo}</div>
            </>
        )
    } else if (loading && userCharInfo) {
        return (
            <>
                <div>
                    Loading...
                </div>

                <MoveHome />
            </>
        )
    } else {
        return (
            <>
                <div>
                    <strong>{user}</strong>캐릭명을 확인하셈
                </div>
                <MoveHome />
            </>
        )
    }
}

export default User;