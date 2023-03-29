const userName = 'test1';

function test(userName) {
    const changeUserName = userName.trim();

    if ((changeUserName.length < 12 && changeUserName.length >= 2) && !(/[^a-zA-Z가-힣0-9]/g.test(changeUserName))) {
        return true;
    } else return false;
    
}

console.log(test(userName));