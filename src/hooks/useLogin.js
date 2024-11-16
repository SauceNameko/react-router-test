import { useEffect, useState } from "react"
import { LoginApi, LogoutApi } from "../apis/AuthApi";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
    const navigate = useNavigate();
    const login = (username, password) => {
        const check = async () => {
            const data = await LoginApi(username, password);
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", data.username);
                setIsLogin(true);
            } else {
                return alert("エラーが発生しました");
            }
        }
        check();
    }

    const logout = () => {
        const check = async () => {
            const data = await LogoutApi();
            if (data.success) {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                setIsLogin(false);
            } else {
                return alert("エラーが発生しました");
            }
        }
        check();
    }

    useEffect(() => {
        console.log(isLogin);

        if (isLogin) {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    }, [isLogin]);

    return { isLogin, login, logout }
}