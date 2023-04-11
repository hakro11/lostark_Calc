
export interface userInfo {
    rootClass : "Warrior" | "Fighter" | "Hunter" | "Magician" | "Assassin" | "Specialist"
    className: string
    engraving: string[]
    specializationRatio?: number
    ultiRatio?: 0.054648648648649
    useSkillInfo?: SkillInfo[]
}

export interface SkillInfo {
    skillName: string
    skillType : string
    skillBasic: number
    skillRatio: number
}

interface UseCards{
    cardName : string | null
    cardIcon : string | null
}

