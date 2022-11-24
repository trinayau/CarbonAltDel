import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(() =>
      localStorage.getItem("access_token")
        ? jwt_decode(localStorage.getItem("access_token"))
        : null
    );
    
    let contextData = {
        user:user,
        setUser:setUser,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
