import { Equipment } from "../interface/interface";

/* 안쓰는 const 추후 관리 필요 */
export const equipmentSetEffect = [
    {
        OptionName: "지배",
        setEffect: [ 1.1 , 1.31 , 1.2 ]
    },
    {
        OptionName: "배신",
        setEffect: [0, 0, 0]
    },
    {
        OptionName: "갈망",
        setEffect: [0, 0, 1.12]
    },
    {
        OptionName: "파괴",
        setEffect: [0, 0, 0.322]
    },
    {
        OptionName: "매혹",
        setEffect: [0, 0, 0]
    },
    {
        OptionName: "사멸",
        setEffect: [0.65, 0, 1.26]
    },
    {
        OptionName: "악몽",
        setEffect: [1.17, 0.2, 1.2]
    },
    {
        OptionName: "환각",
        setEffect: [1.17, 0, 1.15]
    },
    {
        OptionName: "구원",
        setEffect: [0.21, 0.42, 0.63]
    },
]

export const activeEquipmentOption: Equipment[] = [
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