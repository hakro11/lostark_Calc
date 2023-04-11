import { userInfo } from "../interface/interface";

// const WARRIOR: userInfo[] = [
//     {
//         className: "워로드",
//         engraving: ["고독한기사", "전투태세"],
//     },
//     {
//         className: "디스트로이어",
//         engraving: ["중력수련", "분노의망치"],
//     },
//     {
//         className: "홀리나이트",
//         engraving: ["축복의오라", "심판자"],
//     },
//     {
//         className: "슬레이어",
//         engraving: ["처단자", "포식자"],
//     }
// ];

// const FIGHTER: userInfo[] = [
//     {
//         className: "배틀마스터",
//         engraving: ["초심", "오의강화"],
//         specializationRatio: 0.038621621621621624,
//         useSkillInfo: [
//             {
//                 skillName: "삼연권",
//                 skillType: "일반",
//                 skillBasic: 843,
//                 skillRatio: 5.241761071060762,
//             },
//             {
//                 skillName: "붕천퇴",
//                 skillType: "일반",
//                 skillBasic: 751,
//                 skillRatio: 4.652935118434604,
//             },
//             {
//                 skillName: "뇌명각",
//                 skillType: "일반",
//                 skillBasic: 1371,
//                 skillRatio: 8.527806385169928,
//             },
//             {
//                 skillName: "섬열란아",
//                 skillType: "일반",
//                 skillBasic: 1997,
//                 skillRatio: 12.3370236869207,
//             },
//             {
//                 skillName: "월섬각",
//                 skillType: "일반",
//                 skillBasic: 2665,
//                 skillRatio: 16.496395468589082,
//             },
//             {
//                 skillName: "지뢰진",
//                 skillType: "일반",
//                 skillBasic: 2255,
//                 skillRatio: 13.846549948506695,
//             },
//             {
//                 skillName: "잠룡승천축",
//                 skillType: "일반",
//                 skillBasic: 1513,
//                 skillRatio: 9.366632337796087,
//             },
//             {
//                 skillName: "바람의 속삭임",
//                 skillType: "일반",
//                 skillBasic: 0,
//                 skillRatio: 0,
//             },
//             {
//                 skillName: "초풍각",
//                 skillType: "일반",
//                 skillBasic: 2606,
//                 skillRatio: 15.9351184346035,
//             },
//             {
//                 skillName: "화조강림",
//                 skillType: "일반",
//                 skillBasic: 1566,
//                 skillRatio: 9.772657054582904,
//             },
//             {
//                 skillName: "용맹의 포효",
//                 skillType: "일반",
//                 skillBasic: 1137,
//                 skillRatio: 7.0363027806385166,
//             },
//             {
//                 skillName: "방천격",
//                 skillType: "일반",
//                 skillBasic: 2247,
//                 skillRatio: 13.887487126673532,
//             },
//             {
//                 skillName: "내공연소",
//                 skillType: "일반",
//                 skillBasic: 6844,
//                 skillRatio: 42.00308959835221,
//             },
//             {
//                 skillName: "오의 : 나선경",
//                 skillType: "오의",
//                 skillBasic: 1864,
//                 skillRatio: 11.553810504634397,
//             },
//             {
//                 skillName: "오의 : 화룡천상",
//                 skillType: "오의",
//                 skillBasic: 3293,
//                 skillRatio: 20.442584963954687,
//             },
//             {
//                 skillName: "오의 : 뇌진격",
//                 skillType: "오의",
//                 skillBasic: 1659,
//                 skillRatio: 10.26338825952626,
//             },
//             {
//                 skillName: "오의 : 풍신초래",
//                 skillType: "오의",
//                 skillBasic: 4823,
//                 skillRatio: 29.932801235839342,
//             },
//             {
//                 skillName: "오의 : 폭쇄진",
//                 skillType: "오의",
//                 skillBasic: 4440,
//                 skillRatio: 27.498712667353246,
//             },
//             {
//                 skillName: "극의 : 일순난격",
//                 skillType: "각성기",
//                 skillBasic: 50094,
//                 skillRatio: 310.423789907312,
//             },
//             {
//                 skillName: "극의 : 무극권",
//                 skillType: "각성기",
//                 skillBasic: 41207,
//                 skillRatio: 255.46421215242017,
//             },
//         ]
//     },
//     {
//         className: "인파이터",
//         engraving: ["극의:체술", "충격단련"],
//     },
//     {
//         className: "기공사",
//         engraving: ["역천지체", "세맥타통"],
//     },
//     {
//         className: "창술사",
//         engraving: ["절정", "절제"],
//     },
//     {
//         className: "스트라이커",
//         engraving: ["일격필살", "오의난무"]
//     }
// ];

// const HUNTER: userInfo[] = [
//     {
//         className: "데빌헌터",
//         engraving: ["강화무기", "핸드거너"],
//     },
//     {
//         className: "블래스터",
//         engraving: ["화력강화", "포격강화"],
//     },
//     {
//         className: "호크아이",
//         engraving: ["죽음의습격", "두번째동료"]
//     },
//     {
//         className: "스카우터",
//         engraving: ["진화의 유산", "아르데타인의 기술"],
//     }
// ];

// const MAGICIAN: userInfo[] = [
//     {
//         className: "아르카나",
//         engraving: ["황제", "황후"],
//     },
//     {
//         className: "서머너",
//         engraving: ["상급 소환사", "넘치는 교감"],
//     },
//     {
//         className: "바드",
//         engraving: ["절실한 구원", "진실된 용맹"],
//     },
//     {
//         className: "소서리스",
//         engraving: ["점화", "환류"],
//         specializationRatio: 0.30757837837837837,
//         useSkillInfo: [
//             {
//                 skillName: "블레이즈",
//                 skillType: "속성",
//                 skillBasic: 2187,
//                 skillRatio: 13.58104517271922,
//             },
//             {
//                 skillName: "에너지 방출",
//                 skillType: "일반",
//                 skillBasic: 1019,
//                 skillRatio: 6.348095659875996,
//             },
//             {
//                 skillName: "라이트닝 볼텍스",
//                 skillType: "속성",
//                 skillBasic: 2487,
//                 skillRatio: 15.350457632122822,
//             },
//             {
//                 skillName: "혹한의 부름",
//                 skillType: "속성",
//                 skillBasic: 4718,
//                 skillRatio: 29.07942131679953,
//             },
//             {
//                 skillName: "돌풍",
//                 skillType: "일반",
//                 skillBasic: 2028,
//                 skillRatio: 12.536167700029525,
//             },
//             {
//                 skillName: "숭고한 해일",
//                 skillType: "속성",
//                 skillBasic: 2764,
//                 skillRatio: 17.122527310304104,
//             },
//             {
//                 skillName: "인페르노",
//                 skillType: "속성",
//                 skillBasic: 2942,
//                 skillRatio: 18.23442574549749,
//             },
//             {
//                 skillName: "천벌",
//                 skillType: "속성",
//                 skillBasic: 6491,
//                 skillRatio: 40.20726306465899,
//             },
//             {
//                 skillName: "리버스 그래비티",
//                 skillType: "일반",
//                 skillBasic: 3206,
//                 skillRatio: 19.840271626808384,
//             },
//             {
//                 skillName: "서릿발",
//                 skillType: "속성",
//                 skillBasic: 1815,
//                 skillRatio: 11.242692648361382,
//             },
//             {
//                 skillName: "라이트닝 볼트",
//                 skillType: "속성",
//                 skillBasic: 3489,
//                 skillRatio: 21.523767345733688,
//             },
//             {
//                 skillName: "엘리멘탈 리액트",
//                 skillType: "일반",
//                 skillBasic: 4101,
//                 skillRatio: 25.400354295837023,
//             },
//             {
//                 skillName: "아이스 애로우",
//                 skillType: "속성",
//                 skillBasic: 3944,
//                 skillRatio: 24.422793032181872,
//             },
//             {
//                 skillName: "익스플로전",
//                 skillType: "속성",
//                 skillBasic: 6260,
//                 skillRatio: 38.783584292884555,
//             },
//             {
//                 skillName: "엘레기안의 손길",
//                 skillType: "속성",
//                 skillBasic: 0,
//                 skillRatio: 0,
//             },
//             {
//                 skillName: "종말의 날",
//                 skillType: "속성",
//                 skillBasic: 7562,
//                 skillRatio: 46.81635665780927,
//             },
//             {
//                 skillName: "엔비스카의 권능",
//                 skillType: "각성기",
//                 skillBasic: 36284,
//                 skillRatio: 224.84174785946266,
//             },
//             {
//                 skillName: "종말의 부름",
//                 skillType: "각성기",
//                 skillBasic: 37864,
//                 skillRatio: 234.59344552701506,
//             },
//         ]
//     }
// ];

// const ASSASSIN: userInfo[] = [
//     {
//         className: "데모닉",
//         engraving: ["완벽한 억제", "멈출 수 없는 충동"],
//     },
//     {
//         className: "블레이드",
//         engraving: ["잔재된 기운", "버스트"],
//     },
//     {
//         className: "리퍼",
//         engraving: ["달의 소리", "갈증"],
//         specializationRatio: 0.041486486486486,
//         ultiRatio: 0.054648648648649,
//         useSkillInfo: [
//             {
//                 skillName: "나이트메어",
//                 skillType: "단검",
//                 skillBasic: 1453,
//                 skillRatio: 8.994833643314735,
//             },
//             {
//                 skillName: "쉐도우 닷",
//                 skillType: "단검",
//                 skillBasic: 196 + 394 + 394,
//                 skillRatio: 6.1008472824963835,
//             },
//             {
//                 skillName: "스피릿 캐치",
//                 skillType: "단검",
//                 skillBasic: 270 + 814,
//                 skillRatio: 6.746021905352346,
//             },
//             {
//                 skillName: "스피닝 대거",
//                 skillType: "단검",
//                 skillBasic: 350 + 451,
//                 skillRatio: 4.952882827030378,
//             },
//             {
//                 skillName: "샤벨 스팅거",
//                 skillType: "단검",
//                 skillBasic: 436 + 436,
//                 skillRatio: 5.411861954949369,
//             },
//             {
//                 skillName: "이블리스토",
//                 skillType: "단검",
//                 skillBasic: 401 + 401 + 401 + 401,
//                 skillRatio: 9.886340152924157,
//             },
//             {
//                 skillName: "팬텀 댄서",
//                 skillType: "단검",
//                 skillBasic: 287 + 287 + 287 + 287,
//                 skillRatio: 7.17255631328787,
//             },
//             {
//                 skillName: "데스 사이드",
//                 skillType: "단검",
//                 skillBasic: 403 + 939,
//                 skillRatio: 8.306468278569952,
//             },
//             {
//                 skillName: "디스토션",
//                 skillType: "그림자",
//                 skillBasic: 728 + 720,
//                 skillRatio: 8.9299442033478,
//             },
//             {
//                 skillName: "콜 오브 나이프",
//                 skillType: "그림자",
//                 skillBasic: 358 + 540 + 890,
//                 skillRatio: 10.978714610456706,
//             },
//             {
//                 skillName: "쉐도우 스톰",
//                 skillType: "그림자",
//                 skillBasic: 613 + 1228 + 1230 + 925,
//                 skillRatio: 24.749328373630917,
//             },
//             {
//                 skillName: "블링크",
//                 skillType: "그림자",
//                 skillBasic: 27274,
//                 skillRatio: 5.45505269683819,
//             },
//             {
//                 skillName: "블랙 미스트",
//                 skillType: "그림자",
//                 skillBasic: 3085,
//                 skillRatio: 19.035337879727216,
//             },
//             {
//                 skillName: "쉐도우 트랩",
//                 skillType: "그림자",
//                 skillBasic: 705,
//                 skillRatio: 4.386236825790452,
//             },
//             {
//                 skillName: "사일런트 스매셔",
//                 skillType: "급습",
//                 skillBasic: 2799,
//                 skillRatio: 17.344079355238687,
//             },
//             {
//                 skillName: "라스트 그래피티",
//                 skillType: "급습",
//                 skillBasic: 2618,
//                 skillRatio: 16.230832816697664,
//             },
//             {
//                 skillName: "댄싱 오브 퓨리",
//                 skillType: "급습",
//                 skillBasic: 1163 + 1759,
//                 skillRatio: 18.168423227939655,
//             },
//             {
//                 skillName: "레이지 스피어",
//                 skillType: "급습",
//                 skillBasic: 2742,
//                 skillRatio: 16.987807398222774,
//             },
//         ]
//     }
// ];

// const SPECIALLIST: userInfo[] = [
//     {
//         className: "도화가",
//         engraving: ["만개", "회귀"],
//     },
//     {
//         className: "기상술사",
//         engraving: ["질풍노도", "이슬비"],
//         specializationRatio: 0.071529729727973,
//         ultiRatio: 0.054648648648649,
//         useSkillInfo: [
//             {
//                 skillName: "펼치기",
//                 skillType: "우산",
//                 skillBasic: 1065,
//                 skillRatio: 6.590296495956873,
//             },
//             {
//                 skillName: "내려찍기",
//                 skillType: "우산",
//                 skillBasic: 1338,
//                 skillRatio: 8.23572653761333,
//             },
//             {
//                 skillName: "회오리 걸음",
//                 skillType: "우산",
//                 skillBasic: 4000,
//                 skillRatio: 24.701053663317815,
//             },
//             {
//                 skillName: "몰아치기",
//                 skillType: "우산",
//                 skillBasic: 3963,
//                 skillRatio: 24.604018622886546,
//             },
//             {
//                 skillName: "돌개바람",
//                 skillType: "우산",
//                 skillBasic: 2218,
//                 skillRatio: 13.732663562852242,
//             },
//             {
//                 skillName: "바람송곳",
//                 skillType: "우산",
//                 skillBasic: 6385,
//                 skillRatio: 39.60328350894389,
//             },
//             {
//                 skillName: "마주바람",
//                 skillType: "우산",
//                 skillBasic: 6375,
//                 skillRatio: 39.54030874785592,
//             },
//             {
//                 skillName: "칼바람",
//                 skillType: "우산",
//                 skillBasic: 6008,
//                 skillRatio: 37.24699828473413,
//             },
//             {
//                 skillName: "소용돌이",
//                 skillType: "기상",
//                 skillBasic: 2768,
//                 skillRatio: 17.12570448419505,
//             },
//             {
//                 skillName: "소나기",
//                 skillType: "기상",
//                 skillBasic: 2134,
//                 skillRatio: 13.424895858858124,
//             },
//             {
//                 skillName: "센바람",
//                 skillType: "기상",
//                 skillBasic: 2295,
//                 skillRatio: 14.13648615535408,
//             },
//             {
//                 skillName: "짙은 안개",
//                 skillType: "기상",
//                 skillBasic: 1696,
//                 skillRatio: 10.266601323205096,
//             },
//             {
//                 skillName: "봄바람",
//                 skillType: "기상",
//                 skillBasic: 1886,
//                 skillRatio: 11.689291840235237,
//             },
//             {
//                 skillName: "날아가기",
//                 skillType: "기상",
//                 skillBasic: 493,
//                 skillRatio: 3.044351874540554,
//             },
//             {
//                 skillName: "싹쓸바람",
//                 skillType: "기상",
//                 skillBasic: 3014,
//                 skillRatio: 18.725802499387406,
//             },
//             {
//                 skillName: "뙤약볕",
//                 skillType: "기상",
//                 skillBasic: 2576,
//                 skillRatio: 15.975986277873071,
//             },
//             {
//                 skillName: "풍랑주의보",
//                 skillType: "각성기",
//                 skillBasic: 41715,
//                 skillRatio: 258.967409948542,
//             },
//             {
//                 skillName: "나르가의 칼날",
//                 skillType: "각성기",
//                 skillBasic: 50478,
//                 skillRatio: 312.7919627542269,
//             },
//         ]
//     }
// ];

export const classInformation: userInfo[] = [
    {
        rootClass: "Warrior",
        className: "워로드",
        engraving: ["고독한기사", "전투태세"],
    },
    {
        rootClass: "Warrior",
        className: "디스트로이어",
        engraving: ["중력수련", "분노의망치"],
    },
    {
        rootClass: "Warrior",
        className: "홀리나이트",
        engraving: ["축복의오라", "심판자"],
    },
    {
        rootClass: "Warrior",
        className: "슬레이어",
        engraving: ["처단자", "포식자"],
    },
    {
        rootClass: "Fighter",
        className: "배틀마스터",
        engraving: ["초심", "오의강화"],
        specializationRatio: 0.038621621621621624,
        useSkillInfo: [
            {
                skillName: "삼연권",
                skillType: "일반",
                skillBasic: 843,
                skillRatio: 5.241761071060762,
            },
            {
                skillName: "붕천퇴",
                skillType: "일반",
                skillBasic: 751,
                skillRatio: 4.652935118434604,
            },
            {
                skillName: "뇌명각",
                skillType: "일반",
                skillBasic: 1371,
                skillRatio: 8.527806385169928,
            },
            {
                skillName: "섬열란아",
                skillType: "일반",
                skillBasic: 1997,
                skillRatio: 12.3370236869207,
            },
            {
                skillName: "월섬각",
                skillType: "일반",
                skillBasic: 2665,
                skillRatio: 16.496395468589082,
            },
            {
                skillName: "지뢰진",
                skillType: "일반",
                skillBasic: 2255,
                skillRatio: 13.846549948506695,
            },
            {
                skillName: "잠룡승천축",
                skillType: "일반",
                skillBasic: 1513,
                skillRatio: 9.366632337796087,
            },
            {
                skillName: "바람의 속삭임",
                skillType: "일반",
                skillBasic: 0,
                skillRatio: 0,
            },
            {
                skillName: "초풍각",
                skillType: "일반",
                skillBasic: 2606,
                skillRatio: 15.9351184346035,
            },
            {
                skillName: "화조강림",
                skillType: "일반",
                skillBasic: 1566,
                skillRatio: 9.772657054582904,
            },
            {
                skillName: "용맹의 포효",
                skillType: "일반",
                skillBasic: 1137,
                skillRatio: 7.0363027806385166,
            },
            {
                skillName: "방천격",
                skillType: "일반",
                skillBasic: 2247,
                skillRatio: 13.887487126673532,
            },
            {
                skillName: "내공연소",
                skillType: "일반",
                skillBasic: 6844,
                skillRatio: 42.00308959835221,
            },
            {
                skillName: "오의 : 나선경",
                skillType: "오의",
                skillBasic: 1864,
                skillRatio: 11.553810504634397,
            },
            {
                skillName: "오의 : 화룡천상",
                skillType: "오의",
                skillBasic: 3293,
                skillRatio: 20.442584963954687,
            },
            {
                skillName: "오의 : 뇌진격",
                skillType: "오의",
                skillBasic: 1659,
                skillRatio: 10.26338825952626,
            },
            {
                skillName: "오의 : 풍신초래",
                skillType: "오의",
                skillBasic: 4823,
                skillRatio: 29.932801235839342,
            },
            {
                skillName: "오의 : 폭쇄진",
                skillType: "오의",
                skillBasic: 4440,
                skillRatio: 27.498712667353246,
            },
            {
                skillName: "극의 : 일순난격",
                skillType: "각성기",
                skillBasic: 50094,
                skillRatio: 310.423789907312,
            },
            {
                skillName: "극의 : 무극권",
                skillType: "각성기",
                skillBasic: 41207,
                skillRatio: 255.46421215242017,
            },
        ]
    },
    {
        rootClass: "Fighter",
        className: "인파이터",
        engraving: ["극의:체술", "충격단련"],
    },
    {
        rootClass: "Fighter",
        className: "기공사",
        engraving: ["역천지체", "세맥타통"],
    },
    {
        rootClass: "Fighter",
        className: "창술사",
        engraving: ["절정", "절제"],
    },
    {
        rootClass: "Fighter",
        className: "스트라이커",
        engraving: ["일격필살", "오의난무"]
    },
    {
        rootClass: "Hunter",
        className: "데빌헌터",
        engraving: ["강화무기", "핸드거너"],
    },
    {
        rootClass: "Hunter",
        className: "블래스터",
        engraving: ["화력강화", "포격강화"],
    },
    {
        rootClass: "Hunter",
        className: "호크아이",
        engraving: ["죽음의습격", "두번째동료"]
    },
    {
        rootClass: "Hunter",
        className: "스카우터",
        engraving: ["진화의 유산", "아르데타인의 기술"],
    },
    {
        rootClass: "Magician",
        className: "아르카나",
        engraving: ["황제", "황후"],
    },
    {
        rootClass: "Magician",
        className: "서머너",
        engraving: ["상급 소환사", "넘치는 교감"],
    },
    {
        rootClass: "Magician",
        className: "바드",
        engraving: ["절실한 구원", "진실된 용맹"],
    },
    {
        rootClass: "Magician",
        className: "소서리스",
        engraving: ["점화", "환류"],
        specializationRatio: 0.30757837837837837,
        useSkillInfo: [
            {
                skillName: "블레이즈",
                skillType: "속성",
                skillBasic: 2187,
                skillRatio: 13.58104517271922,
            },
            {
                skillName: "에너지 방출",
                skillType: "일반",
                skillBasic: 1019,
                skillRatio: 6.348095659875996,
            },
            {
                skillName: "라이트닝 볼텍스",
                skillType: "속성",
                skillBasic: 2487,
                skillRatio: 15.350457632122822,
            },
            {
                skillName: "혹한의 부름",
                skillType: "속성",
                skillBasic: 4718,
                skillRatio: 29.07942131679953,
            },
            {
                skillName: "돌풍",
                skillType: "일반",
                skillBasic: 2028,
                skillRatio: 12.536167700029525,
            },
            {
                skillName: "숭고한 해일",
                skillType: "속성",
                skillBasic: 2764,
                skillRatio: 17.122527310304104,
            },
            {
                skillName: "인페르노",
                skillType: "속성",
                skillBasic: 2942,
                skillRatio: 18.23442574549749,
            },
            {
                skillName: "천벌",
                skillType: "속성",
                skillBasic: 6491,
                skillRatio: 40.20726306465899,
            },
            {
                skillName: "리버스 그래비티",
                skillType: "일반",
                skillBasic: 3206,
                skillRatio: 19.840271626808384,
            },
            {
                skillName: "서릿발",
                skillType: "속성",
                skillBasic: 1815,
                skillRatio: 11.242692648361382,
            },
            {
                skillName: "라이트닝 볼트",
                skillType: "속성",
                skillBasic: 3489,
                skillRatio: 21.523767345733688,
            },
            {
                skillName: "엘리멘탈 리액트",
                skillType: "일반",
                skillBasic: 4101,
                skillRatio: 25.400354295837023,
            },
            {
                skillName: "아이스 애로우",
                skillType: "속성",
                skillBasic: 3944,
                skillRatio: 24.422793032181872,
            },
            {
                skillName: "익스플로전",
                skillType: "속성",
                skillBasic: 6260,
                skillRatio: 38.783584292884555,
            },
            {
                skillName: "엘레기안의 손길",
                skillType: "속성",
                skillBasic: 0,
                skillRatio: 0,
            },
            {
                skillName: "종말의 날",
                skillType: "속성",
                skillBasic: 7562,
                skillRatio: 46.81635665780927,
            },
            {
                skillName: "엔비스카의 권능",
                skillType: "각성기",
                skillBasic: 36284,
                skillRatio: 224.84174785946266,
            },
            {
                skillName: "종말의 부름",
                skillType: "각성기",
                skillBasic: 37864,
                skillRatio: 234.59344552701506,
            },
        ]
    },
    {
        rootClass: "Assassin",
        className: "데모닉",
        engraving: ["완벽한 억제", "멈출 수 없는 충동"],
    },
    {
        rootClass: "Assassin",
        className: "블레이드",
        engraving: ["잔재된 기운", "버스트"],
    },
    {
        rootClass: "Assassin",
        className: "리퍼",
        engraving: ["달의 소리", "갈증"],
        specializationRatio: 0.041486486486486,
        ultiRatio: 0.054648648648649,
        useSkillInfo: [
            {
                skillName: "나이트메어",
                skillType: "단검",
                skillBasic: 1453,
                skillRatio: 8.994833643314735,
            },
            {
                skillName: "쉐도우 닷",
                skillType: "단검",
                skillBasic: 196 + 394 + 394,
                skillRatio: 6.1008472824963835,
            },
            {
                skillName: "스피릿 캐치",
                skillType: "단검",
                skillBasic: 270 + 814,
                skillRatio: 6.746021905352346,
            },
            {
                skillName: "스피닝 대거",
                skillType: "단검",
                skillBasic: 350 + 451,
                skillRatio: 4.952882827030378,
            },
            {
                skillName: "샤벨 스팅거",
                skillType: "단검",
                skillBasic: 436 + 436,
                skillRatio: 5.411861954949369,
            },
            {
                skillName: "이블리스토",
                skillType: "단검",
                skillBasic: 401 + 401 + 401 + 401,
                skillRatio: 9.886340152924157,
            },
            {
                skillName: "팬텀 댄서",
                skillType: "단검",
                skillBasic: 287 + 287 + 287 + 287,
                skillRatio: 7.17255631328787,
            },
            {
                skillName: "데스 사이드",
                skillType: "단검",
                skillBasic: 403 + 939,
                skillRatio: 8.306468278569952,
            },
            {
                skillName: "디스토션",
                skillType: "그림자",
                skillBasic: 728 + 720,
                skillRatio: 8.9299442033478,
            },
            {
                skillName: "콜 오브 나이프",
                skillType: "그림자",
                skillBasic: 358 + 540 + 890,
                skillRatio: 10.978714610456706,
            },
            {
                skillName: "쉐도우 스톰",
                skillType: "그림자",
                skillBasic: 613 + 1228 + 1230 + 925,
                skillRatio: 24.749328373630917,
            },
            {
                skillName: "블링크",
                skillType: "그림자",
                skillBasic: 27274,
                skillRatio: 5.45505269683819,
            },
            {
                skillName: "블랙 미스트",
                skillType: "그림자",
                skillBasic: 3085,
                skillRatio: 19.035337879727216,
            },
            {
                skillName: "쉐도우 트랩",
                skillType: "그림자",
                skillBasic: 705,
                skillRatio: 4.386236825790452,
            },
            {
                skillName: "사일런트 스매셔",
                skillType: "급습",
                skillBasic: 2799,
                skillRatio: 17.344079355238687,
            },
            {
                skillName: "라스트 그래피티",
                skillType: "급습",
                skillBasic: 2618,
                skillRatio: 16.230832816697664,
            },
            {
                skillName: "댄싱 오브 퓨리",
                skillType: "급습",
                skillBasic: 1163 + 1759,
                skillRatio: 18.168423227939655,
            },
            {
                skillName: "레이지 스피어",
                skillType: "급습",
                skillBasic: 2742,
                skillRatio: 16.987807398222774,
            },
        ]
    },
    {
        rootClass: "Specialist",
        className: "도화가",
        engraving: ["만개", "회귀"],
    },
    {
        rootClass: "Specialist",
        className: "기상술사",
        engraving: ["질풍노도", "이슬비"],
        specializationRatio: 0.071529729727973,
        ultiRatio: 0.054648648648649,
        useSkillInfo: [
            {
                skillName: "펼치기",
                skillType: "우산",
                skillBasic: 1065,
                skillRatio: 6.590296495956873,
            },
            {
                skillName: "내려찍기",
                skillType: "우산",
                skillBasic: 1338,
                skillRatio: 8.23572653761333,
            },
            {
                skillName: "회오리 걸음",
                skillType: "우산",
                skillBasic: 4000,
                skillRatio: 24.701053663317815,
            },
            {
                skillName: "몰아치기",
                skillType: "우산",
                skillBasic: 3963,
                skillRatio: 24.604018622886546,
            },
            {
                skillName: "돌개바람",
                skillType: "우산",
                skillBasic: 2218,
                skillRatio: 13.732663562852242,
            },
            {
                skillName: "바람송곳",
                skillType: "우산",
                skillBasic: 6385,
                skillRatio: 39.60328350894389,
            },
            {
                skillName: "마주바람",
                skillType: "우산",
                skillBasic: 6375,
                skillRatio: 39.54030874785592,
            },
            {
                skillName: "칼바람",
                skillType: "우산",
                skillBasic: 6008,
                skillRatio: 37.24699828473413,
            },
            {
                skillName: "소용돌이",
                skillType: "기상",
                skillBasic: 2768,
                skillRatio: 17.12570448419505,
            },
            {
                skillName: "소나기",
                skillType: "기상",
                skillBasic: 2134,
                skillRatio: 13.424895858858124,
            },
            {
                skillName: "센바람",
                skillType: "기상",
                skillBasic: 2295,
                skillRatio: 14.13648615535408,
            },
            {
                skillName: "짙은 안개",
                skillType: "기상",
                skillBasic: 1696,
                skillRatio: 10.266601323205096,
            },
            {
                skillName: "봄바람",
                skillType: "기상",
                skillBasic: 1886,
                skillRatio: 11.689291840235237,
            },
            {
                skillName: "날아가기",
                skillType: "기상",
                skillBasic: 493,
                skillRatio: 3.044351874540554,
            },
            {
                skillName: "싹쓸바람",
                skillType: "기상",
                skillBasic: 3014,
                skillRatio: 18.725802499387406,
            },
            {
                skillName: "뙤약볕",
                skillType: "기상",
                skillBasic: 2576,
                skillRatio: 15.975986277873071,
            },
            {
                skillName: "풍랑주의보",
                skillType: "각성기",
                skillBasic: 41715,
                skillRatio: 258.967409948542,
            },
            {
                skillName: "나르가의 칼날",
                skillType: "각성기",
                skillBasic: 50478,
                skillRatio: 312.7919627542269,
            },
        ]
    }
]

// export const root_Class = [WARRIOR, FIGHTER, HUNTER, MAGICIAN, ASSASSIN, SPECIALLIST];

