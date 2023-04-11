import { SetStateAction } from "react";
import makeDot from "./makeDot";

function getUserInfo(user: string | null, setUserCharInfo: any, setUserStats: (arg0: any) => void) {
    const charInfo = new XMLHttpRequest(); // 캐릭터 정보

    charInfo.open(
        "GET",
        `https://developer-lostark.game.onstove.com/armories/characters/${user}?filters=profiles%2Bequipment%2Bcombat-skills%2Bengravings%2Bcards%2Bgems`,
        // `https://developer-lostark.game.onstove.com/armories/characters/${user}/profiles`,
        true
    );

    charInfo.responseType = "text";
    charInfo.setRequestHeader(
        "Authorization",
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1MzcifQ.cY1UDdLxIqG1SPFBZ45e3MHPHulFriHeATtjGx_tM0oJdQTygPWvi-RKLk6c8qCNVjJVf-QVQ4eFFs3YfwvgC-MNEqw0BrFkI3_gBBFv2ambfYFwQtGeE--eCPExYXVoHlL78w1iR4N5JUYXu2zTr-A4qV87iVkqm7i0WuceWSIIyfzzOyvG7BNxZcH2xw18QcVNnDaoGoETUQY7QFJdbKRjpxRpq4NkVpc_lQaUvLToNvGcsfFJAMJ6Gy0QrrCmcsuaHeaTIHA2n3ZfqF-95_Kf4KdJZFAoS4QaXK1O7KAxhp5o8XZe118aODCIg2apCpuinfYg6sTeCctjSEwXYQ"
    );

    charInfo.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == this.DONE) {
            if (charInfo.response != "null") {
                let userCharInfo = JSON.parse(charInfo.response);
                console.log(userCharInfo);
                // console.log(userCharInfo.ArmoryEquipment[12].Tooltip);

                setUserCharInfo(() => {
                    return (
                        <>
                            <div>
                                <img key={userCharInfo.ArmoryProfile
                                    .CharacterImage}
                                    src={userCharInfo.ArmoryProfile
                                        .CharacterImage}
                                    alt={userCharInfo.ArmoryProfile
                                        .CharacterName}
                                    title={userCharInfo.ArmoryProfile
                                        .CharacterName}
                                    className="userImg" />

                                <div>
                                    ItemLv : {userCharInfo.ArmoryProfile
                                        .ItemMaxLevel}
                                </div>
                            </div>
                        </>
                    );
                });

                setUserStats(userCharInfo.ArmoryProfile
                    .Stats.map((i: {
                        Tooltip: string; Type: string; Value: number;
                    }) => {
                        return <div
                            title={i.Tooltip[0]}>
                            {i.Type + " : " + makeDot(i.Value)}
                        </div>;
                    }));

            } else {
                return setUserCharInfo(false);
            }
        }
    };

    charInfo.send();
}

function getUserSkillInfo(user: string | null,
    setUserSkillInfo: { (value: SetStateAction<never[]>): void; (arg0: any): void; }, setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) {
    const skillInfo = new XMLHttpRequest(); // 스킬 정보

    skillInfo.open(
        "GET",
        `https://developer-lostark.game.onstove.com/armories/characters/${user}/combat-skills`,

        true
    );

    skillInfo.responseType = "text";
    skillInfo.setRequestHeader(
        "Authorization",
        /* API키 */
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1MzcifQ.cY1UDdLxIqG1SPFBZ45e3MHPHulFriHeATtjGx_tM0oJdQTygPWvi-RKLk6c8qCNVjJVf-QVQ4eFFs3YfwvgC-MNEqw0BrFkI3_gBBFv2ambfYFwQtGeE--eCPExYXVoHlL78w1iR4N5JUYXu2zTr-A4qV87iVkqm7i0WuceWSIIyfzzOyvG7BNxZcH2xw18QcVNnDaoGoETUQY7QFJdbKRjpxRpq4NkVpc_lQaUvLToNvGcsfFJAMJ6Gy0QrrCmcsuaHeaTIHA2n3ZfqF-95_Kf4KdJZFAoS4QaXK1O7KAxhp5o8XZe118aODCIg2apCpuinfYg6sTeCctjSEwXYQ"
    );

    skillInfo.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == this.DONE) {
            if (skillInfo.response != "null") {
                // console.log(JSON.parse(skillInfo.response));
                const userUsingSkill = JSON.parse(skillInfo.response)
                    .filter((i: { Level: number; }) => i.Level != 1)
                    // console.log(userUsingSkill)
                    .map((u: { Name: string; Icon: string; Level: number; Rune: any; Tripods: any[]; }) => ({
                        Name: u.Name,
                        Icon: u.Icon,
                        Level: u.Level,
                        Rune: u.Rune,
                        Tripods: u.Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected == true),
                    }));
                // console.log(userUsingSkill[6].Tripods[1].Tooltip);
                const userInfo = userUsingSkill.map((i: { Icon: string; Name: string; }) => (
                    <img key={i.Icon} src={i.Icon}
                        alt={i.Name}
                        title={i.Name}
                        className="skillImg" />
                ));

                setUserSkillInfo(userInfo);
                setLoading(false);

            }
        }
    };

    skillInfo.send();
}

export { getUserSkillInfo, getUserInfo }