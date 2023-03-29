export default function validateUserName(userName:string) :boolean{
    const changeUserName = userName.trim();

    if ((changeUserName.length < 12 && changeUserName.length >= 2) && !(/[^a-zA-Z가-힣0-9]/g.test(changeUserName))) {
        return true;
    } else{
        return false;
    } 
}