import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { SignInProvider } from "./context/signinContext";
import PrivateRoute from "./components/PrivateRote";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <SignInProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </SignInProvider>
  );
}

export default App;
