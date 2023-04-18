import { ArmorySkills, SkillInfo, Equipment } from '../interface/interface';
import { classInformation } from '../constants/classInfo';


export default function DamCalc(charInfo: any): number[] {
    const userEquipment = filterSetOption();
    const userUsingSkillRatio: SkillInfo[] = filterSkillRatio();
    const userUsingSkillInfo: ArmorySkills[] = filterUsingSkill();
    let 추가피해: number = 100 + catchWeaponOption();
    let 피해증가: number = 1;
    let 치명타피해: number = 2;
    let 공격력증가: number = 1;
    let 방어력감소: number = 6500;
    const attackDam: number = catchAttackDam();

    calcOption();
    /* 장비 셋트옵션 효과 적용 */
    function calcOption() {
        for (let i = 0; i < userEquipment.length; i++) {
            switch (userEquipment[i].OptionName) {
                case "지배":
                    if (userEquipment[i].Active > 0 && userEquipment[i].Active < 2) {
                        continue;
                    } else if (userEquipment[i].Active >= 2 && userEquipment[i].Active < 4) {
                        피해증가 = 피해증가 * 1.1;
                    } else if (userEquipment[i].Active >= 4 && userEquipment[i].Active < 6) {
                        피해증가 = 피해증가 * 1.31;
                    } else if (userEquipment[i].Active >= 6) {
                        피해증가 = 피해증가 * 1.31 * 1.2;
                    }
                    break;

                case "갈망":
                    if (userEquipment[i].Active >= 6) {
                        피해증가 = 피해증가 * 1.12;
                    }
                    break;

                case "파괴":
                    if (userEquipment[i].Active >= 6) {
                        추가피해 += 0.322;
                    }
                    break;

                case "사멸":
                    if (userEquipment[i].Active > 0 && userEquipment[i].Active < 2) {
                        continue;
                    } else if (userEquipment[i].Active >= 2 && userEquipment[i].Active < 4) {
                        치명타피해 += 0.65;
                    } else if (userEquipment[i].Active >= 4 && userEquipment[i].Active < 6) {
                        치명타피해 += 0.65;
                    } else if (userEquipment[i].Active >= 6) {
                        치명타피해 += 0.65;
                        피해증가 = 피해증가 * 1.26;
                    }
                    break;

                case "악몽":
                    if (userEquipment[i].Active > 0 && userEquipment[i].Active < 2) {
                        continue;
                    } else if (userEquipment[i].Active >= 2 && userEquipment[i].Active < 4) {
                        피해증가 = 피해증가 * 1.17;
                    } else if (userEquipment[i].Active >= 4 && userEquipment[i].Active < 6) {
                        피해증가 = 피해증가 * 1.17;
                        추가피해 += 0.20;
                    } else if (userEquipment[i].Active >= 6) {
                        피해증가 = 피해증가 * 1.17 * 1.20;
                        추가피해 += 0.20;
                    }
                    break;

                case "환각":
                    if (userEquipment[i].Active > 0 && userEquipment[i].Active < 2) {
                        continue;
                    } else if (userEquipment[i].Active >= 2 && userEquipment[i].Active < 4) {
                        피해증가 = 피해증가 * 1.17;
                    } else if (userEquipment[i].Active >= 4 && userEquipment[i].Active < 6) {
                        피해증가 = 피해증가 * 1.17;
                    } else if (userEquipment[i].Active >= 6) {
                        피해증가 = 피해증가 * 1.17 * 1.15;
                    }
                    break;

                case "구원":
                    if (userEquipment[i].Active > 0 && userEquipment[i].Active < 2) {
                        continue;
                    } else if (userEquipment[i].Active >= 2 && userEquipment[i].Active < 4) {
                        추가피해 += 0.21;
                    } else if (userEquipment[i].Active >= 4 && userEquipment[i].Active < 6) {
                        추가피해 += 0.21 * 2;
                    } else if (userEquipment[i].Active >= 6) {
                        추가피해 += 0.21 * 3;
                        피해증가 = 피해증가 * 1.05;
                    }
                    break;

                case "매혹": case "배신":
                    break;

            }

        }
    }

    function optionDam(): number {
        return 치명타피해 * (추가피해 / 100) * 피해증가
    }

    /* 캐릭터 사용 스킬 필터링 */
    function filterUsingSkill(): ArmorySkills[] {
        const filtering: ArmorySkills[] = charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level !== 1)
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

        return filtering;

    }   // filterUsingSkill

    /* 캐릭터 사용 스킬과 해당 클래스 스킬 정보 매칭 */
    function filterSkillRatio(): SkillInfo[] {
        const filtering: ArmorySkills[] = filterUsingSkill();
        let classSkillInfo: SkillInfo[] = classInformation
            .filter(i => i.className === charInfo.ArmoryProfile.CharacterClassName)[0]
            .useSkillInfo.filter(skill => filtering.some((obj) => obj.Name === skill.skillName)
            )

        return classSkillInfo;

    }   // filterSkillRatio

    /* 무기 추가피해량 파싱 */
    function catchWeaponOption(): number {
        return parseFloat(JSON.parse(charInfo.ArmoryEquipment[0].Tooltip).Element_006.value.Element_001.match(/[0-9.]+/))
    }   // catchWeaponOption

    /* 장착 장비 세트옵션 활성 체크 */
    function filterSetOption(): Equipment[] {
        const activeEquipmentOption: Equipment[] = [
            {
                OptionName: "지배",
                Active: 0
            },
            {
                OptionName: "배신",
                Active: 0
            },
            {
                OptionName: "갈망",
                Active: 0
            },
            {
                OptionName: "파괴",
                Active: 0
            },
            {
                OptionName: "매혹",
                Active: 0
            },
            {
                OptionName: "사멸",
                Active: 0
            },
            {
                OptionName: "악몽",
                Active: 0
            },
            {
                OptionName: "환각",
                Active: 0
            },
            {
                OptionName: "구원",
                Active: 0
            },
        ];

        for (let i = 0; i < 6; i++) {
            let userEquipment: string = charInfo.ArmoryEquipment[i].Name
                .split(" ");
            activeEquipmentOption.filter(i => i.OptionName === userEquipment[3])
                .map(j => j.Active++)
        }

        return activeEquipmentOption.filter(i => i.Active !== 0)

    }   // filterSetOption

    /* 캐릭터 기본 공격력 파싱 */
    function catchAttackDam(): number {
        let charAttackDam = charInfo.ArmoryProfile.Stats[7]
            .Tooltip[1].match(/[>][0-9]{1,6}[</font$]/);
        charAttackDam = charAttackDam[0].substring(1, charAttackDam[0].length - 1);

        return parseInt(charAttackDam);
    }   // catchAttackDam

    return userUsingSkillRatio.map(i => ((attackDam * 공격력증가) * i.skillRatio + i.skillBasic) * (6500 / (방어력감소 + 6500)) * optionDam() * 0.8);

}   // damCalc


