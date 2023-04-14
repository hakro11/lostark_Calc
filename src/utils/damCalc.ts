import { classInformation } from './../constants/classInfo';

export default function damCalc(props: any) {
    const charInfo = props.charInfo;

    let userSkill = loadClassSkillInfo();
    let attackDam = catchAttackDam();

    // const damage = attackDam

    function loadClassSkillInfo() {
        const classSkillInfo = classInformation
            .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName);

        return classSkillInfo;
    }

    function catchAttackDam() {
        let charAttackDam = charInfo.ArmoryProfile.Stats[7]
            .Tooltip[1].match(/[>][0-9]{1,6}[</font$]/);
        charAttackDam = charAttackDam[0].substring(1, charAttackDam[0].length - 1);

        return charAttackDam;
    }
}


