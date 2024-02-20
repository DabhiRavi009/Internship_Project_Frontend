import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";
import { ServiceProviderDashboard } from "./components/serviceprovider/ServiceProviderDashboard";
import { AddService } from "./components/serviceprovider/AddService";
import { UserDashboard } from "./components/user/UserDashboard";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";

function App() {
  const path = window.location.pathname;
  return (
    <body>
      {/* <div className="pcoded-main-container"> */}
      <div className="pcoded-wrapper">
        {path === "/" ||
        path === "/login" ||
        path === "" ||
        path === "/signup" ? null : (
          <Sidebar />
        )}
        {path === "/" ||
        path === "/login" ||
        path === "" ||
        path === "/signup" ? null : (
          <Navbar />
        )}
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route
                path="/serviceprovider/dashboard"
                element={<ServiceProviderDashboard />}
              ></Route>
              <Route
                path="/serviceprovider/addservice"
                element={<AddService />}
              ></Route>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
