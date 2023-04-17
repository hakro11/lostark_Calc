import { ArmorySkills, SkillInfo, Equipment } from './../interface/interface';
import { classInformation } from './../constants/classInfo';

export default function damCalc(charInfo: any) {
    let activeEquipmentOption: Equipment[] = [
        {
            optionName: "지배",
            Active: 0
        },
        {
            optionName: "배신",
            Active: 0
        },
        {
            optionName: "갈망",
            Active: 0
        },
        {
            optionName: "파괴",
            Active: 0
        },
        {
            optionName: "매혹",
            Active: 0
        },
        {
            optionName: "사멸",
            Active: 0
        },
        {
            optionName: "악몽",
            Active: 0
        },
        {
            optionName: "환각",
            Active: 0
        },
        {
            optionName: "구원",
            Active: 0
        },
    ];

    const userUsingSkillRatio: SkillInfo[] = filterSkillRatio();
    const userUsingSkillInfo: ArmorySkills[] = filterUsingSkill();
    let 피해증가:number = 1;
    let 치명타피해:number = 2;
    let 추가피해:number = 1;
    let 공격력증가:number = 1;
    // const userArmoryEquipment: ArmoryEquipment[] = 
    const attackDam: number = catchAttackDam();
    // const t1: number[] = totalDam();

    function totalDam(): number[] {
        return userUsingSkillRatio.map(i => (attackDam * 공격력증가) * (i.skillRatio) + (i.skillBasic) * 피해증가 * 치명타피해 * 추가피해)
    }   // totalDam

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
    }   // filterSkillRatio

    filterSetOption();
    function filterSetOption() {
        for (let i = 0; i < 6; i++) {
            let userEquipment: string = charInfo.ArmoryEquipment[i].Name
                .split(" ");
            activeEquipmentOption.filter(i => i.optionName == userEquipment[3])
            .map(j => j.Active++)
        }

    }   // filterSetOption

    function catchAttackDam(): number {
        let charAttackDam = charInfo.ArmoryProfile.Stats[7]
            .Tooltip[1].match(/[>][0-9]{1,6}[</font$]/);
        charAttackDam = charAttackDam[0].substring(1, charAttackDam[0].length - 1);

        return parseInt(charAttackDam);
    }   // catchAttackDam

}   // damCalc


