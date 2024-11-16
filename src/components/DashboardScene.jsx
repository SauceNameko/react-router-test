import { useEffect } from "react"
import { useField } from "../hooks/useField"
import { FieldScene } from "./FieldScene";
import { useNavigate } from "react-router-dom";

export const DashboardScene = ({ logout, isLogin }) => {
    const { field, isGoal, moveCount, time } = useField();
    const navigate = useNavigate();
    useEffect(() => {
        if (isGoal) {
            navigate("/result", {
                state
                    : { moveCount, time }
            });

        }
    }, [isGoal]);

    return (
        <>
            <button onClick={logout} >ログアウト</button>
            <FieldScene field={field}></FieldScene>
        </>
    )
}