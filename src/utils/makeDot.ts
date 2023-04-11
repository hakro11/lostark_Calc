// 숫자 3개마다 콤마찍기
function makeDot(n:number){
    let s1 = n.toString();
    let d = s1.indexOf('.');
    let s2 = d === -1 ? s1 : s1.slice(0, d);

    for (let i = s2.length - 3; i > 0; i -= 3)
        s2 = s2.slice(0, i) + ',' + s2.slice(i);

    if (d !== -1)
        s2 += s1.slice(d);

    return s2;
}

export default makeDot;