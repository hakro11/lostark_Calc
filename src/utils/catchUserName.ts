import { useSearchParams } from "react-router-dom";

export function CatchUserName() {
    const [searchParm] = useSearchParams();
    const user = searchParm.get("id") as string;

    return user;
}