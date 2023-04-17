import { ArmorySkills, SkillInfo } from './../interface/interface';
import { classInformation } from './../constants/classInfo';

export default function damCalc(charInfo: any) {
    const userUsingSkillRatio: SkillInfo[] = filterSkillRatio();
    const userUsingSkillInfo: ArmorySkills[] = filterUsingSkill();
    // const attackDam: number = catchAttackDam();
    // const t1: number[] = totalDam();

    // function totalDam(): number[] {
    //     return userUsingSkillRatio.map(i => attackDam * (i.skillRatio) + (i.skillBasic))
    // }

    function filterUsingSkill(): ArmorySkills[] {
        let filtering: ArmorySkills[] = charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
        .map((u : ArmorySkills) => ({
            Icon: u.Icon,
            IsAwakening: u.IsAwakening,
            Name: u.Name,
            Level: u.Level,
            Rune: u.Rune,
            ToolTip : u.Tooltip,
            Type : u.Type,
            Tripods: u.Tripods.filter((j) => j.IsSelected === true),
        }))
        // console.log(filtering)
        return filtering;
    }
    
    function filterSkillRatio() :SkillInfo[]{
        const filtering = filterUsingSkill();
        let classSkillInfo: SkillInfo[] = classInformation
        .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName)[0]
        .useSkillInfo.filter(skill => filtering.some((obj) => obj.Name === skill.skillName)
        )
        // console.log(classSkillInfo)
        return classSkillInfo;
    }

    function catchAttackDam(): number {
        let charAttackDam = charInfo.ArmoryProfile.Stats[7]
            .Tooltip[1].match(/[>][0-9]{1,6}[</font$]/);
        charAttackDam = charAttackDam[0].substring(1, charAttackDam[0].length - 1);

        return parseInt(charAttackDam);
    }
}


