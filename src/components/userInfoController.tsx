import damCalc from "../utils/damCalc";
import makeDot from "../utils/makeDot";
import { classInformation } from './../constants/classInfo';


function CharInfo(props: any) {
    const charInfo = props.charInfo;
    console.log(charInfo);

    /* ========= 구분선 ============== */
        // console확인용 funtion
    let userSkill = catchClass();
    console.log(userSkill);
    function catchClass() {
        let filtering = charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
            .map((u: { Name: string; Icon: string; Level: number; Rune: any; Tripods: any[]; }) => ({
                Name: u.Name,
                Icon: u.Icon,
                Level: u.Level,
                Rune: u.Rune,
                Tripods: u.Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected === true),
            }))

            console.log(filtering)

        let classSkillInfo = classInformation
            .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName)[0]
            .useSkillInfo.filter(skill =>
                filtering.some((obj: { Name: string; }) => obj.Name === skill.skillName)
            )

        return classSkillInfo;
    }
    /* ========= 구분선 ============== */

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
                {charInfo.ArmoryProfile
                    .Stats.map((i: {
                        Tooltip: string; Type: string; Value: number;
                    }) => {
                        return <div
                            title={i.Tooltip[0]}>
                            {i.Type + " : " + makeDot(i.Value)}
                        </div>;
                    })}
            </>
        )
    }

    // function UserUsingSkill() {
    //     return (
    //         <div>
    //             {
    //                 charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
    //                     .map((u: { Name: string; Icon: string; Level: number; Rune: any; Tripods: any[]; }) => ({
    //                         Name: u.Name,
    //                         Icon: u.Icon,
    //                         Level: u.Level,
    //                         Rune: u.Rune,
    //                         Tripods: u.Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected === true),
    //                     }))
    //             }
    //         </div>
    //     )
    // }

    damCalc(charInfo);

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

export { CharInfo }
