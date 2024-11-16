import { useLocation } from "react-router-dom";

export const ResultScene = ({ }) => {
    const location = useLocation();
    const { moveCount, time } = location.state;
    console.log(moveCount, time);

    return (
        <>
            Result
        </>
    )
}