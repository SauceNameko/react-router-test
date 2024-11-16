import { path } from "./path";
export const LoginApi = async (username, password) => {
    const res = await fetch(`${path}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    return data;
}
export const LogoutApi = async () => {
    const res = await fetch(`${path}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    });
    const data = await res.json();
    return data;
}