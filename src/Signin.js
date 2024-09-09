import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { AuthContext } from "./useAuthContext";

export const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  console.log(user);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential?.user;
    } catch (error) {
      const split = error?.code?.split("/")[1];
      setError(split);
    }
  };
  const resetPassword = async () => {
    try {
      const resetPasswordData = await sendPasswordResetEmail(auth, form.email);
      console.log(resetPasswordData);
    } catch (error) {
      const split = error?.code?.split("/")[1];
      setError(split);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            margin: "auto",
            height: "50vh",
            justifyContent: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Sign In</h2>
          <h5 style={{ textAlign: "center", color: "red" }}>
            {error && error}
          </h5>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ marginBottom: "5px", padding: "5px" }}
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            style={{ marginBottom: "5px", padding: "5px" }}
          />
          <button type="submit">Sign In</button>
          <div style={{ display: "flex" }}>
            <h5 style={{ marginBottom: "0px" }}>forget Password ?</h5>
            <h5
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                marginBottom: "0px",
              }}
              onClick={resetPassword}
            >
              Reset
            </h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Dont have an account? &nbsp;</h5>
            <h5
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => navigate("/sign-up")}
            >
              Signup{" "}
            </h5>
          </div>
        </div>
      </form>
    </>
  );
};
