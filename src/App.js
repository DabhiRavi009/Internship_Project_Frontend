import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";
import { ServiceProviderDashboard } from "./components/serviceprovider/ServiceProviderDashboard";
import { AddService } from "./components/serviceprovider/AddService";
import { UserDashboard } from "./components/user/UserDashboard";
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
import { Chart } from "./components/serviceprovider/Chart";
import { BookedService } from "./components/user/BookedService";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { ManageServiceProvider } from "./components/admin/ManageServiceProvider";
import { ManageService } from "./components/admin/ManageService";
import { ManageUser } from "./components/admin/ManageUser";
import { UpdateServiceProvider } from "./components/serviceprovider/UpdateServiceProvider";
import { ServiceProviderList } from "./components/serviceprovider/ServiceProviderList";
import { BookedServiceAdmin } from "./components/admin/BookedServiceAdmin";
import { HomePage } from "./components/HomePage";
import { ServiceProviderProfile } from "./components/serviceprovider/ServiceProviderProfile";
import { AdminProfile } from "./components/admin/AdminProfile";
import { UserProfile } from "./components/user/UserProfile";
import { ResetPassword } from "./components/ResetPassword";
import { ForgotPassword } from "./components/ForgotPassword";
import { DonePayment } from "./components/user/DonePayment";
import { PendingStatus } from "./components/user/PendingStatus";
import { TotalAmount } from "./components/user/TotalAmount";
import { TotalFees } from "./components/serviceprovider/TotalAmount";
import { TotalBooking } from "./components/serviceprovider/TotalBooking";
import { TotalService } from "./components/serviceprovider/TotalService";
import { DoneBooking } from "./components/serviceprovider/DoneBooking";
import { AdTotalService } from "./components/admin/AdTotalService";
import { AdminTotalSP } from "./components/admin/AdminTotalSP";
import { AdminAllService } from "./components/admin/AdminAllService";
import { AdminBookService } from "./components/admin/AdminBookService";
function App() {
  const path = window.location.pathname;
  return (
    <body>
      <div className="pcoded-wrapper">
        {path === "/" ||
        path === "/login" ||
        path === "" ||
        path === "/forgotpassword" ||
        path === "/signup" ? null : (
          <Sidebar />
        )}
      </div>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/admin/adminbookedservice"
                element={<BookedServiceAdmin />}
              ></Route>
              <Route
                path="/admin/adminbookservice"
                element={<AdminBookService />}
              ></Route>
              <Route
                path="/admin/adminallservice"
                element={<AdminAllService />}
              ></Route>
              <Route
                path="/admin/adtotalservice"
                element={<AdTotalService />}
              ></Route>
              <Route
                path="/admin/adtotalserviceprovider"
                element={<AdminTotalSP />}
              ></Route>
              <Route path="/admin/profile" element={<AdminProfile />}></Route>
              <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
              ></Route>
              <Route
                path="/admin/manageservice"
                element={<ManageService />}
              ></Route>
              <Route
                path="/admin/manageserviceprovider"
                element={<ManageServiceProvider />}
              ></Route>
              <Route path="/admin/manageuser" element={<ManageUser />}></Route>
              <Route
                path="/serviceprovider/dashboard"
                element={<ServiceProviderDashboard />}
              ></Route>
              <Route
                path="/serviceprovider/donebooking"
                element={<DoneBooking />}
              ></Route>
              <Route
                path="/serviceprovider/totalbooking"
                element={<TotalBooking />}
              ></Route>
              <Route
                path="/serviceprovider/totalamount"
                element={<TotalFees />}
              ></Route>
              <Route
                path="/serviceprovider/totalservice"
                element={<TotalService />}
              ></Route>
              <Route
                path="/serviceprovider/profile"
                element={<ServiceProviderProfile />}
              ></Route>
              <Route
                path="/serviceprovider/serviceproviderlist"
                element={<ServiceProviderList />}
              ></Route>
              <Route
                path="/serviceprovider/addservice"
                element={<AddService />}
              ></Route>
              <Route
                path="/serviceprovider/servicelist"
                element={<ServiceList />}
              ></Route>
              <Route path="/chart" element={<Chart />}></Route>
              <Route
                path="/serviceprovider/addserviceprovider"
                element={<AddServiceProvider />}
              ></Route>
              <Route
                path="/serviceprovider/update/:id"
                element={<UpdateService />}
              ></Route>
              <Route
                path="/serviceprovider/serviceproviderupdate/:id"
                element={<UpdateServiceProvider />}
              ></Route>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              <Route path="/user/profile" element={<UserProfile />}></Route>
              <Route
                path="/user/bookedservice"
                element={<BookedService />}
              ></Route>
              <Route path="/user/done" element={<DonePayment />}></Route>
              <Route path="/user/fees" element={<TotalAmount />}></Route>
              <Route path="/user/pending" element={<PendingStatus />}></Route>
              <Route path="/user/adduser" element={<AddUser />}></Route>
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
