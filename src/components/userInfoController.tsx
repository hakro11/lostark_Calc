import { ArmorySkills, SkillInfo, ProfileStats } from "../interface/interface";   // console 확인 후 삭제 필요
import damCalc from "../utils/damCalc";
import makeDot from "../utils/makeDot";
import { classInformation } from './../constants/classInfo';


function CharInfo(props: any) {
    const charInfo = props.charInfo;
    // console.log(charInfo);
    damCalc(charInfo);

    
    /* ========= 구분선 ============== */
    // console확인용 funtion
    // console.log(filterSkillRatio());
    // console.log(filterUsingSkill());
    function filterUsingSkill(): ArmorySkills[] {
        let filtering: ArmorySkills[] = charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
            .map((u: ArmorySkills) => ({
                Icon: u.Icon,
                IsAwakening: u.IsAwakening,
                Name: u.Name,
                Level: u.Level,
                Rune: u.Rune,
                ToolTip: u.Tooltip,
                Type: u.Type,
                Tripods: u.Tripods.filter(j => j.IsSelected === true),
            }))
        // console.log(filtering)
        return filtering;
    }

    function filterSkillRatio(): SkillInfo[] {
        const filtering = filterUsingSkill();
        let classSkillInfo: SkillInfo[] = classInformation
            .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName)[0]
            .useSkillInfo.filter(skill => filtering.some((obj) => obj.Name === skill.skillName)
            )
        // console.log(classSkillInfo)
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
                {
                    charInfo.ArmoryProfile.Stats
                        .map((i: ProfileStats, index: number) => {
                            return <div
                                title={i.Tooltip[0]}
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

export { CharInfo }
