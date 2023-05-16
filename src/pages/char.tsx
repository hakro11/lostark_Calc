import { useState, useEffect } from "react";
import { CatchUserName } from "../utils/catchUserName";
import requestCharInfo from "../utils/requestCharInfo";
import { CharInfo } from "../components/userInfoController";
import '../styles/Char.css';



export default function Char() {
    const user: string = CatchUserName();
    const [charInfo, setCharInfo] = useState(null);

    useEffect(() => {
        if (user) {
            requestCharInfo(user, setCharInfo);
        }
    }, [user]);

    // console.log(charInfo)



    return (
        <>
            <div>캐릭명 : {user} </div>
            {charInfo && <CharInfo charInfo={charInfo} />}
        </>
    )
}
