import React, { useContext } from "react";
import { AuthContext } from "./useAuthContext";
import { auth } from "./firebase";

export const Home = () => {
  const user = useContext(AuthContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Welcom to home page {user?.proactiveRefresh?.user?.email}</div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};
