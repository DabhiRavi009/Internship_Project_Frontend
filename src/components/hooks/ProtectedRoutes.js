import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../Login";

const useAuth = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Id") !== null) {
      setisAuthenticated(true);
    }
  }, []);
  return isAuthenticated;
};

export const ProtectedRoutes = () => {
  const auth = useAuth();
  console.log("auth...", auth);

  return auth == true ? <Outlet /> : <Login />;
};
