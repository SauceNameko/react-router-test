import { useEffect, useRef, useState } from "react"
import { FieldApi } from "../apis/FieldApi"
export const useField = () => {
    const [field, setField] = useState([]);
    const [playerPos, setPlayerPos] = useState({ y: 1, x: 1 });
    const [isGoal, setIsGaol] = useState(false);
    const [moveCount, setMoveCount] = useState(0);
    const timeRef = useRef();
    const [time, setTime] = useState(0);
    //初期データ取得
    useEffect(() => {
        const check = async () => {
            const data = await FieldApi();
            if (data.objects) {
                setField(data.objects);
            } else {
                return alert("エラーが発生しました");
            }
        }
        check();
        timeRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timeRef.current);
        }
    }, []);
    //プレイヤー移動
    const move = (e) => {
        if (field.length === 0) return;
        setPlayerPos(prev => {
            let newY = prev.y;
            let newX = prev.x;
            let direction = "";
            switch (e.key) {
                case "ArrowLeft":
                    newX = newX - 1;
                    direction = "left";
                    break;
                case "ArrowRight":
                    newX = newX + 1;
                    direction = "right";

                    break;
                case "ArrowUp":
                    newY = newY - 1;
                    direction = "up";
                    break;
                case "ArrowDown":
                    newY = newY + 1;
                    direction = "down";
                    break;
                default:
                    break;
            }
            const newField = [...field];
            if (newField[newY][newX] == 0) {
                newField[newY][newX] = 2;
                newField[prev.y][prev.x] = 0;
                setMoveCount(prev => prev + 1);
                setField(newField);
                return { y: newY, x: newX };
            } else if (newField[newY][newX] == 1) {
                return { y: prev.y, x: prev.x };
            } else if (newField[newY][newX] == 3) {
                if (direction == "left") {
                    if (newField[newY][newX - 1] == 0) {
                        newField[newY][newX - 1] = 3;
                        newField[newY][newX] = 0;
                        newField[prev.y][prev.x] = 2;
                    }
                } if (direction == "right") {
                    if (newField[newY][newX + 1] == 0) {
                        newField[newY][newX + 1] = 3;
                        newField[newY][newX] = 0;
                        newField[prev.y][prev.x] = 2;
                    }
                } if (direction == "up") {
                    if (newField[newY - 1][newX] == 0) {
                        newField[newY - 1][newX] = 3;
                        newField[newY][newX] = 0;
                        newField[prev.y][prev.x] = 2;
                    }
                } if (direction == "left") {
                    if (newField[newY + 1][newX] == 0) {
                        newField[newY + 1][newX] = 3;
                        newField[newY][newX] = 0;
                        newField[prev.y][prev.x] = 2;
                    }
                }
                return { y: prev.y, x: prev.x };
            } else if (newField[newY][newX] == 4) {
                setIsGaol(true);
                clearInterval(timeRef.current);
            }
            return { y: newY, x: newX };
        })
    }
    useEffect(() => {
        document.addEventListener("keydown", move);
        return () => {
            document.removeEventListener("keydown", move);
        }
    }, [field]);

    return { field, isGoal, moveCount,time }
}