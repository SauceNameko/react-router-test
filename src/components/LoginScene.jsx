import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

export const LoginScene = ({ login, isLogin }) => {
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    return (
        <>
            username: <input type="text" ref={userRef} defaultValue={localStorage.getItem("username")} />
            password: <input type="text" ref={passRef} />
            <button onClick={() => login(userRef.current.value, passRef.current.value)} >ログイン</button>
        </>
    )
}