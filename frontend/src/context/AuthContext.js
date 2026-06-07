import React, {
 createContext,
 useState,
 useEffect,
} from "react";

export const AuthContext =
 createContext();

export const AuthProvider = ({
 children,
}) => {
 const [token, setToken] = useState(
   localStorage.getItem("token")
 );

 const login = (jwtToken) => {
   localStorage.setItem(
     "token",
     jwtToken
   );
   setToken(jwtToken);
 };

 const logout = () => {
   localStorage.removeItem(
     "token"
   );
   setToken(null);
 };

 useEffect(() => {
   const stored =
     localStorage.getItem("token");

   if (stored) {
     setToken(stored);
   }
 }, []);

 return (
   <AuthContext.Provider
     value={{
       token,
       login,
       logout,
     }}
   >
     {children}
   </AuthContext.Provider>
 );
};
