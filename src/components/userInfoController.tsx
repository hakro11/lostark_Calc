import { ProfileStats } from "../interface/interface";   // console 확인 후 삭제 필요
import damCalc from "../utils/damCalc";
import makeDot from "../utils/makeDot";

export function CharInfo(props: any) {
    const charInfo = props.charInfo;
    console.log(charInfo);
    damCalc(charInfo);

    /* ============== 구분선 ============== */
    /*        console 확인용 funtion        */

    /* ============== 구분선 ============== */

    function CharImg() {
        return (
            <div>
                <img
                    src={charInfo.ArmoryProfile
                        .CharacterImage}
                    alt={charInfo.ArmoryProfile
                        .CharacterName}
                    title={charInfo.ArmoryProfile
                        .CharacterName}
                    className="userImg" />
                <div>
                    ItemLv : {charInfo.ArmoryProfile
                        .ItemMaxLevel}
                </div>
            </div>
        )
    }

    function UserStats() {
        return (
            <>
                {
                    charInfo.ArmoryProfile.Stats
                        .map((i: ProfileStats, index: number) => {
                            return <div
                                // title={i.Tooltip[0].match(/[^a-zA-Z]/)}
                                key={index}>
                                {i.Type + " : " + makeDot(parseInt(i.Value))}
                            </div>;
                        })
                }
            </>
        )
    }

    return (
        <>
            <div className="info">
                <CharImg />
                <div className="stats">
                    <UserStats />
                </div>
            </div>
        </>
    )
}