import { useContext } from "react"
import { AuthProvider } from "../Authentication/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Page/Shared/Spinner";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const location=  useLocation()
    const { user, loading } = useContext(AuthProvider);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
}

export default PrivateRoute
