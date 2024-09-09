import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const UseAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate("/");
      } else {
        setUser(null);
        navigate("/sign-up");
      }
    });

    return () => {
      subscribe();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
export default UseAuthContext;
