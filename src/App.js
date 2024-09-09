import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Signin";
import { Home } from "./home";
import { SignUp } from "./signUp";
import { ProtectedRoute } from "./protectedRoutes";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
