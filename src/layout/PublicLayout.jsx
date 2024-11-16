import { Navigate, Outlet } from "react-router-dom"

export const PublicLayout = ({ isLogin }) => {
    if (isLogin) {
        return <Navigate to={"/dashboard"} ></Navigate>
    }
    return <Outlet></Outlet>
}