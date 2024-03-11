import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";
import { ServiceProviderDashboard } from "./components/serviceprovider/ServiceProviderDashboard";
import { AddService } from "./components/serviceprovider/AddService";
import { UserDashboard } from "./components/user/UserDashboard";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { ProtectedRoutes } from "./components/hooks/ProtectedRoutes";
import { ServiceList } from "./components/serviceprovider/ServiceList";
import { UpdateService } from "./components/serviceprovider/UpdateService";
import { AddServiceProvider } from "./components/serviceprovider/AddServiceProvider";
import { AddUser } from "./components/user/AddUser";
import { UserList } from "./components/user/UserList";
import { AllServices } from "./components/user/AllServices";
import { FeatchService } from "./components/user/FeatchService";
import { Payment } from "./components/Payment";
import { UpdateUser } from "./components/user/UpdateUser";
import { Error } from "./components/Error";

function App() {
  const path = window.location.pathname;
  return (
    <body>
      <div className="pcoded-wrapper">
        {path === "/" ||
        path === "/login" ||
        path === "" ||
        path === "/signup" ? null : (
          <Sidebar />
        )}
        {/* {path === "/" ||
        path === "/login" ||
        path === "" ||
        path === "/signup" ? null : (
          <Navbar />
        )} */}
      </div>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/serviceprovider/dashboard"
                element={<ServiceProviderDashboard />}
              ></Route>
              <Route
                path="/serviceprovider/addservice"
                element={<AddService />}
              ></Route>
              <Route
                path="/serviceprovider/servicelist"
                element={<ServiceList />}
              ></Route>
              {/* <Route
                path="/serviceprovider/addserviceprovider"
                element={<AddServiceProvider />}
              ></Route> */}
              <Route
                path="/serviceprovider/update/:id"
                element={<UpdateService />}
              ></Route>

              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              {/* <Route path="/user/adduser" element={<AddUser />}></Route> */}
              <Route path="/user/userlist" element={<UserList />}></Route>
              <Route path="/user/allservices" element={<AllServices />}></Route>
              <Route path="/user/update/:id" element={<UpdateUser />}></Route>
              <Route path="/payment/:id" element={<Payment />}></Route>
              <Route
                path="/user/featchservice/:id"
                element={<FeatchService />}
              ></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
