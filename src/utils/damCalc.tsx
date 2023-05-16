import { ArmorySkills, SkillInfo, Equipment, Tripods } from '../interface/interface';
import { classInformation } from '../constants/classInfo';
import { activeEquipmentOption } from '../constants/equipmentSetOption';
import { ENGRAVING } from '../constants/engraving';

export default function DamCalc(charInfo: any) {
    const userEquipment = filterSetOption();
    const userUsingSkillRatio: SkillInfo[] = filterSkillRatio();
    const userUsingSkillInfo: ArmorySkills[] = filterUsingSkill();
    let 추가피해: number = 100 + catchWeaponOption();
    let 피해증가: number = 1;
    let 치명타피해: number = 2;
    let 공격력증가: number = 1;
    let 방어력감소: number = 6500 * (1 - 12 / 100);
    const attackDam: number = catchAttackDam();

    calcEquipmentEffect();  // 장비 셋트효과 계산
    calcEngravingEffect();  // 각인 효과 계산

    /* 옵션 대미지 계산 */
    function optionDam(): number {
        return 치명타피해 * (추가피해 / 100) * 피해증가
    }

    /* 장비 셋트옵션 효과 적용 */
    function calcEquipmentEffect() {
        for (let i = 0; i < userEquipment.length; i++) {
            const activeLevel = userEquipment[i].Active;
            switch (userEquipment[i].OptionName) {
                case "지배":
                    if (activeLevel > 0 && activeLevel < 2) {
                        continue;
                    } else if (activeLevel >= 2 && activeLevel < 4) {
                        피해증가 *= 1.1;
                    } else if (activeLevel >= 4 && activeLevel < 6) {
                        피해증가 *= 1.31;
                    } else if (activeLevel >= 6) {
                        피해증가 *= 1.31 * 1.2;
                    }
                    break;

                case "갈망":
                    if (activeLevel >= 6) {
                        피해증가 *= 1.12;
                    }
                    break;

                case "파괴":
                    if (activeLevel >= 6) {
                        추가피해 += 0.322;
                    }
                    break;

                case "사멸":
                    if (activeLevel > 0 && activeLevel < 2) {
                        continue;
                    } else if (activeLevel >= 2 && activeLevel < 4) {
                        치명타피해 += 0.65;
                    } else if (activeLevel >= 4 && activeLevel < 6) {
                        치명타피해 += 0.65;
                    } else if (activeLevel >= 6) {
                        치명타피해 += 0.65;
                        피해증가 *= 1.26;
                    }
                    break;

                case "악몽":
                    if (activeLevel > 0 && activeLevel < 2) {
                        continue;
                    } else if (activeLevel >= 2 && activeLevel < 4) {
                        피해증가 *= 1.17;
                    } else if (activeLevel >= 4 && activeLevel < 6) {
                        피해증가 *= 1.17;
                        추가피해 += 0.20;
                    } else if (activeLevel >= 6) {
                        피해증가 *= 1.17 * 1.20;
                        추가피해 += 0.20;
                    }
                    break;

                case "환각":
                    if (activeLevel > 0 && activeLevel < 2) {
                        continue;
                    } else if (activeLevel >= 2 && activeLevel < 4) {
                        피해증가 *= 1.17;
                    } else if (activeLevel >= 4 && activeLevel < 6) {
                        피해증가 *= 1.17;
                    } else if (activeLevel >= 6) {
                        피해증가 *= 1.17 * 1.15;
                    }
                    break;

                case "구원":
                    if (activeLevel > 0 && activeLevel < 2) {
                        continue;
                    } else if (activeLevel >= 2 && activeLevel < 4) {
                        추가피해 += 0.21;
                    } else if (activeLevel >= 4 && activeLevel < 6) {
                        추가피해 += 0.21 * 2;
                    } else if (activeLevel >= 6) {
                        추가피해 += 0.21 * 3;
                        피해증가 *= 1.05;
                    }
                    break;

                case "매혹": case "배신": default:
                    break;

            }

        }
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

    function filterTripods(){
        let 스킬피해증가: number = 1;
        let 스킬치명타피해: number = 치명타피해;
        let 스킬방어력감소: number = 방어력감소;

        const selectedTripods = userUsingSkillInfo.map((c) => c.Tripods.map(cn => cn.Tooltip))

        return selectedTripods;
    }

    /* 유저 사용 각인 필터 후 옵션 효과 계산*/
    function calcEngravingEffect() {
        const filterEngraving: { EngravingName: string; EngravingLevel: number }[] = charInfo.ArmoryEngraving.Effects.map((i: { Name: string }) => ({
            EngravingName: i.Name.match(/[\s가-힣:]+/)?.toString().trim(),
            EngravingLevel: i.Name.match(/[1-3]/)
        }));

        const userEngraving = ENGRAVING.filter(i => filterEngraving.some((obj) => obj.EngravingName === i.EngravingName))

        userEngraving.map((i) => {
            const idx: number = filterEngraving.filter(j => j.EngravingName === i.EngravingName)[0].EngravingLevel

            switch (i.EngravingName) {
                case "각성": case "강령술": case "강화 방패": case "구슬 동자": case "굳은 의지": case "급소 타격": case "긴급구조": case "마나의 흐름": case "번개의 분노": case "분쇄의 주먹": case "불굴": case "선수필승": case "실드 관통": case "승부사": case "여신의 가호": case "위기 모면": case "전문의": case "중갑 착용": case "정기 흡수": case "최대 마나 증가": case "탈출의 명수": case "폭발물 전문가": case "공격속도 감소": case "방어력 감소": case "이동속도 감소":
                    break;

                case "결투의 대가": case "기습의 대가": case "달인의 저력": case "돌격대장": case "마나 효율 증가": case "바리케이드": case "부러진 뼈": case "속전속결": case "슈퍼 차지": case "시선 집중": case "안정된 상태": case "약자 무시": case "원한": case "추진력": case "타격의 대가": case "갈증": case "달의 소리":
                    피해증가 *= i.EngravingEffect[idx];
                    break;

                case "아드레날린": case "에테르 포식자": case "저주받은 인형": case "질량 증가": case "공격력 감소":
                    공격력증가 += i.EngravingEffect[idx];
                    break;

                case "예리한 둔기": case "정밀 단도":
                    치명타피해 += i.EngravingEffect[idx];
                    break;

                default:
                    break;
            }
        })

    }   // filterEngraving

    /* 무기 추가피해량 파싱 */
    function catchWeaponOption(): number {
        return parseFloat(JSON.parse(charInfo.ArmoryEquipment[0].Tooltip).Element_006.value.Element_001.match(/[0-9.]+/))
    }   // catchWeaponOption

    /* 장착 장비 세트옵션 활성 체크 */
    function filterSetOption(): Equipment[] {
        const getActiveEquipmentOption: Equipment[] = activeEquipmentOption;

        for (let i = 0; i < 6; i++) {
            let userEquipment: string = charInfo.ArmoryEquipment[i].Name
                .split(" ");
            getActiveEquipmentOption.filter(i => i.OptionName === userEquipment[3])
                .map(j => j.Active++)
        }

        return getActiveEquipmentOption.filter(i => i.Active !== 0)

    }   // filterSetOption

    /* 캐릭터 기본 공격력 파싱 */
    function catchAttackDam(): number {
        let charAttackDam = charInfo.ArmoryProfile.Stats[7]
            .Tooltip[1].match(/[>][0-9]{1,6}[</font$]/);
        charAttackDam = charAttackDam[0].substring(1, charAttackDam[0].length - 1);

        return parseInt(charAttackDam);
    }   // catchAttackDam

    // return userUsingSkillRatio.map(i => ((attackDam * 공격력증가) * i.skillRatio + i.skillBasic) * (6500 / (방어력감소 + 6500)) * optionDam() * 0.8);

}   // damCalc


