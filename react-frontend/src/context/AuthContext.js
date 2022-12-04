import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState(() => 
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      navigate("/account?redirect=true");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const logoutuser = () => {
    localStorage.removeItem("authTokens");
    setAuthTokens(null);
    setUser(null);
    navigate("/");
  }

  const registerUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
        first_name: e.target.first_name.value,
        user_name: e.target.username.value
      }),
    });
    let data = await response.json();
    if (response.status === 201) {
      navigate("/login?redirect=true");
    } else {
      alert("Invalid Username or Password");
    }
  };


  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'refresh': authTokens?.refresh
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
    } else {
      logoutuser();
    }
    if(loading){
      setLoading(false);
    }
  };
  
  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutuser: logoutuser,
    registerUser: registerUser,
    authTokens: authTokens,
  };

  useEffect(() => {

    if(loading){
      updateToken();

    }
    let fourMins = 1000 * 60 * 4;
      let interval = setInterval(() => {
        if (authTokens) {
          updateToken();
        }
      }, fourMins);
      return () => { clearInterval(interval); }
    }, [authTokens, loading]);


  return (
    <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>
  );
};

export default AuthContext;
