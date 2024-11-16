import { Navigate, Outlet } from "react-router-dom"

export const PrivateLayout = ({ isLogin }) => {
    if (!isLogin) {
        return <Navigate to={"/"} ></Navigate>
    }
    return <Outlet></Outlet>
}