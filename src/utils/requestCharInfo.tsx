export default function requestUserInfo(user: string | null, setCharInfo: any) {
    const charInfo = new XMLHttpRequest(); // 캐릭터 정보

    charInfo.open(
        "GET",
        `https://developer-lostark.game.onstove.com/armories/characters/${user}?filters=profiles%2Bequipment%2Bcombat-skills%2Bengravings%2Bcards%2Bgems`,
        true
    );

    charInfo.responseType = "text";
    charInfo.setRequestHeader(
        "Authorization",
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1MzcifQ.cY1UDdLxIqG1SPFBZ45e3MHPHulFriHeATtjGx_tM0oJdQTygPWvi-RKLk6c8qCNVjJVf-QVQ4eFFs3YfwvgC-MNEqw0BrFkI3_gBBFv2ambfYFwQtGeE--eCPExYXVoHlL78w1iR4N5JUYXu2zTr-A4qV87iVkqm7i0WuceWSIIyfzzOyvG7BNxZcH2xw18QcVNnDaoGoETUQY7QFJdbKRjpxRpq4NkVpc_lQaUvLToNvGcsfFJAMJ6Gy0QrrCmcsuaHeaTIHA2n3ZfqF-95_Kf4KdJZFAoS4QaXK1O7KAxhp5o8XZe118aODCIg2apCpuinfYg6sTeCctjSEwXYQ"
    );

    charInfo.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === this.DONE) {
            if (charInfo.response !== "null") {
                setCharInfo(JSON.parse(charInfo.response));
                // console.log(JSON.parse(charInfo.response))
            }
        }
    }

    charInfo.send();
}
