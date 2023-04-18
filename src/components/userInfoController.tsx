import { ProfileStats } from "../interface/interface";
import damCalc from "../utils/damCalc";
import makeDot from "../utils/makeDot";

export function CharInfo(props: any) {
    const charInfo = props.charInfo;

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
        // let Tooltip: string[] = []
        // for (let i = 0; i < charInfo.ArmoryProfile.Stats.length; i++) {
        //     Tooltip[i] = charInfo.ArmoryProfile.Stats[i].Tooltip[0].match(/[가-힣]+[\s][가-힣]+/)
        //     // console.log(Tooltip[i])
        // }
        return (
            <>
                {
                    charInfo.ArmoryProfile.Stats
                        .map((i: ProfileStats, index: number) => {
                            return <div
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