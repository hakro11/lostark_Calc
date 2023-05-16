import { useSearchParams } from "react-router-dom";

export function CatchUserName(){
    const [searchParm, setSearchParm] = useSearchParams();
    const user = searchParm.get("id") as string;

    return user;
}