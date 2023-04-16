import { ArmorySkills, SkillInfo, Tripods } from './../interface/interface';
import { classInformation } from './../constants/classInfo';

export default function damCalc(charInfo: any) {
    const userSkill: SkillInfo[] = filterUsingSkill();
    const attackDam: number = catchAttackDam();
    const t1: number[] = totalDam();

    function totalDam(): number[] {
        return userSkill.map(i => attackDam * (i.skillRatio) + (i.skillBasic))
    }

    function filterUsingSkill(): SkillInfo[] {
        let filtering: ArmorySkills[] = charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
            .map((u: { Name: string; Icon: string; Level: number; Rune: string; Tripods: Tripods[]; }) => ({
                Name: u.Name,
                Icon: u.Icon,
                Level: u.Level,
                Rune: u.Rune,
                Tripods: u.Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected === true),
            }))

        // console.log(filtering)

        let classSkillInfo: SkillInfo[] = classInformation
            .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName)[0]
            .useSkillInfo.filter(skill => { filtering.some((obj) => obj.Name === skill.skillName) }
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


