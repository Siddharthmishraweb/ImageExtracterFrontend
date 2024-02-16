import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useAuth } from "./security/AuthContext";
import AuthContextProvider from "./security/AuthContext";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import UploadImageFirst from "./UploadImageFirst";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  const { isAuthenticated } = authContext;
  return isAuthenticated && children;
}

export default function ImageText() {
  return (
    <div className="TodoApp">
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <UploadImageFirst />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/upload"
              element={
                <AuthenticatedRoute>
                  <UploadImageFirst />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
