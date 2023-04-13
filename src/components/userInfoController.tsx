import makeDot from "../utils/makeDot";

function CharInfo(props: any) {
    const charInfo = props.charInfo;

    function CharImg() {
        return (
            <div>
                <img
                    src={charInfo.ArmoryProfile
                        .CharacterImage}
                    alt={charInfo.ArmoryProfile
                        .CharacterName}
                    title={charInfo.ArmoryProfile
                        .CharacterName}
                    className="userImg" />
                <div>
                    ItemLv : {charInfo.ArmoryProfile
                        .ItemMaxLevel}
                </div>
            </div>
        )
    }

    function UserStats() {
        return (
            <>
                {charInfo.ArmoryProfile
                    .Stats.map((i: {
                        Tooltip: string; Type: string; Value: number;
                    }) => {
                        return <div
                            title={i.Tooltip[0]}>
                            {i.Type + " : " + makeDot(i.Value)}
                        </div>;
                    })}
            </>
        )
    }   

    console.log(charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level != 1)
        .map((u: { Name: string; Icon: string; Level: number; Rune: any; Tripods: any[]; }) => ({
            Name: u.Name,
            Icon: u.Icon,
            Level: u.Level,
            Rune: u.Rune,
            Tripods: u.Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected == true),
        })))


    function UserUsingSkill() {
        return (
            <div>
                {
                    charInfo.ArmorySkills.filter((i: { Level: number; }) => i.Level != 1)
                        .Tripods.filter((j: { IsSelected: boolean; }) => j.IsSelected == true)
                }
            </div>
        )
    }


    return (
        <>
            <div className="info">
                <CharImg />
                <div className="stats">
                    <UserStats />
                </div>
            </div>
        </>
    )
}




export { CharInfo }