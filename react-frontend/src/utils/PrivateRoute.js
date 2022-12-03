import {Navigate} from 'react-router-dom'
import React, {useContext } from "react";
import AuthContext from "../context/AuthContext";
const PrivateRoute = ({children}) => {
    // const {user} = useContext(AuthContext)

    // const auth = user;
    const auth = false;
    return auth ? children : <Navigate to="/login" />;

}

export default PrivateRoute
