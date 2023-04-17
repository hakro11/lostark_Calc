export interface userInfo {
    rootClass: "Warrior" | "Fighter" | "Hunter" | "Magician" | "Assassin" | "Specialist"
    className: string
    engraving: string[]
    specializationRatio?: number
    ultiRatio?: 0.054648648648649
    useSkillInfo: SkillInfo[]
}

export interface charInfo {
    ArmoryCard: ArmoryCard
    ArmoryEngraving: ArmoryEngraving
    ArmoryEquipment: ArmoryEquipment[]
    ArmoryGem: ArmoryGem
    ArmoryProfile: ArmoryProfile
    ArmorySkills: ArmorySkills[]
}

export interface SkillInfo {
    skillName: string
    skillType: string
    skillBasic: number
    skillRatio: number
}

export interface ArmoryCard {
    Cards: Cards[]
    Effects: CardEffects[]
}

interface Cards {
    AwakeCount: number
    AwakeTotal: number
    Grade: string
    Icon: string
    Name: string
    Slot: number
    Tooltip: string
}

interface CardEffects {
    CardSlots: [number]
    Index: number
    Items: [
        {
            Name: string
            Description: string
        }
    ]
}

export interface ArmoryEngraving {
    Effect: EngravingEffects[]
    Engravings: Engravings[]
}

interface EngravingEffects {
    Description: string
    Name: string
}

interface Engravings {
    Icon: string
    Name: string
    Slot: number
    Tooltip: string
}

export interface ArmoryEquipment {
    Grade: string;
    Icon: string;
    Name: string;
    Tooltip: string;
    Type: string;
}

export interface ArmoryGem {
    Effect: GemEffects[]
    Gems: Gems[]
}

interface GemEffects {
    Description: string
    GemSlot: number
    Name: string
    Tooltip: string
}

interface Gems {
    Grade: string
    Icon: string
    Level: number
    Name: string
    Slot: number
    Tooltip: string
}

export interface ArmoryProfile {
    CharacterClassName: string
    CharacterImage: string
    CharacterLevel: number
    CharacterName: string
    ExpeditionLevel: number
    GuildMemberGrade: string
    GuildName: string
    ItemAvgLevel: string
    ItemMaxLevel: string
    PvpGradeName: string
    ServerName: string
    Stats: ProfileStats[]
    Tendencies: ProfileTendencies[]
    Title: string
    TotalSkillPoint: number
    TownLevel: number
    TownName: string
    UsingSkillPoint: number
}

export interface ProfileStats {
    Tooltip: string[]
    Type: string
    Value: string
}

interface ProfileTendencies {
    MaxPoint: number
    Point: number
    Type: string
}

export interface ArmorySkills {
    Icon: string
    IsAwakening: boolean
    Level: number
    Name: string
    Rune: Rune[] | null
    Tooltip: string
    Tripods: Tripods[]
    Type: string
}

interface Rune {
    Grade: "일반" | "고급" | "희귀" | "영웅" | "유물"
    Icon: string
    Name: string
    Tooltip: string
}

export interface Tripods {
    Icon: string
    IsSelected: boolean
    Level: number
    Name: string
    Slot: number
    Tier: number
    Tooltip: string
}

export interface charInfo {
    ArmoryCard: ArmoryCard,
    ArmoryEngraving: ArmoryEngraving,
    ArmoryEquipment: ArmoryEquipment[],
    ArmoryGem: ArmoryGem,
    ArmoryProfile: ArmoryProfile,
    ArmorySkills: ArmorySkills[],
}

export interface Equipment {
    OptionName: "지배" | "배신" | "갈망" | "파괴" | "매혹" | "사멸" | "악몽" | "환각" | "구원" | string
    Active: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface ClassEngraving {
    ClassName: string,
    Engarving: Engraving[]
}

export interface Engraving {
    EngravingName: string,
    EngravingEffect: [number, number, number, number]

}

export interface userInfo {
    rootClass: "Warrior" | "Fighter" | "Hunter" | "Magician" | "Assassin" | "Specialist"
    className: string
    engraving: string[]
    specializationRatio?: number
    ultiRatio?: 0.054648648648649
    useSkillInfo: SkillInfo[]
}

export interface SkillInfo {
    skillName: string
    skillType: string
    skillBasic: number
    skillRatio: number
}

export interface ArmoryCard {
    Cards: Cards[]
    Effects: CardEffects[]
}

interface Cards {
    AwakeCount: number
    AwakeTotal: number
    Grade: string
    Icon: string
    Name: string
    Slot: number
    Tooltip: string
}

interface CardEffects {
    CardSlots: [number]
    Index: number
    Items: [
        {
            Name: string
            Description: string
        }
    ]
}

export interface ArmoryEngraving {
    Effect: EngravingEffects[]
    Engravings: Engravings[]
}

interface EngravingEffects {
    Description: string
    Name: string
}

interface Engravings {
    Icon: string
    Name: string
    Slot: number
    Tooltip: string
}

export interface ArmoryEquipment {
    Grade: string;
    Icon: string;
    Name: string;
    Tooltip: string;
    Type: string;
}

export interface ArmoryGem {
    Effect: GemEffects[]
    Gems: Gems[]
}

interface GemEffects {
    Description: string
    GemSlot: number
    Name: string
    Tooltip: string
}

interface Gems {
    Grade: string
    Icon: string
    Level: number
    Name: string
    Slot: number
    Tooltip: string
}

export interface ArmoryProfile {
    CharacterClassName: string
    CharacterImage: string
    CharacterLevel: number
    CharacterName: string
    ExpeditionLevel: number
    GuildMemberGrade: string
    GuildName: string
    ItemAvgLevel: string
    ItemMaxLevel: string
    PvpGradeName: string
    ServerName: string
    Stats: ProfileStats[]
    Tendencies: ProfileTendencies[]
    Title: string
    TotalSkillPoint: number
    TownLevel: number
    TownName: string
    UsingSkillPoint: number
}

interface ProfileTendencies {
    MaxPoint: number
    Point: number
    Type: string
}

export interface ArmorySkills {
    filter(arg0: (i: { Level: number }) => boolean): unknown
    Icon: string
    IsAwakening: boolean
    Level: number
    Name: string
    Rune: Rune[] | null
    Tooltip: string
    Tripods: Tripods[]
    Type: string
}

interface Rune {
    Grade: "일반" | "고급" | "희귀" | "영웅" | "유물"
    Icon: string
    Name: string
    Tooltip: string
}

export interface Tripods {
    Icon: string
    IsSelected: boolean
    Level: number
    Name: string
    Slot: number
    Tier: number
    Tooltip: string
}

export interface charInfo {
    ArmoryCard: ArmoryCard,
    ArmoryEngraving: ArmoryEngraving,
    ArmoryEquipment: ArmoryEquipment[],
    ArmoryGem: ArmoryGem,
    ArmoryProfile: ArmoryProfile,
    ArmorySkills: ArmorySkills[],
}
