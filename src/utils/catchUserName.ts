import { useSearchParams } from "react-router-dom";

export function CatchUserName(){
    const [searchParm, setSearchParm] = useSearchParams();
    const user: string | null = searchParm.get("id");

    return user;
}