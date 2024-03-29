import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [role, setRole] = useState([]);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const loadRole = async () => {
    const res = await axios.get("http://localhost:1000/roles/role");
    console.log(res.data.data);
    setRole(res.data.data);
  };

  const submitHandler = async (data) => {
    console.log(data);
    try {
      const selectedRole = data.role;
      console.log(selectedRole);
      if (selectedRole === "user") {
        const res = await axios.post(
          "http://localhost:1000/users/user/login",
          data
        );
        console.log(res.status);
        if (res.status === 200) {
          toast.info("User Successfully Login !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("User Login Sucess");
          window.location.pathname = "/user/dashboard";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        } else {
          toast.error("User Login Failed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("User Login failed");
        }
      } else if (selectedRole === "service_provider") {
        const res = await axios.post(
          "http://localhost:1000/serviceproviders/serviceprovider/login",
          data
        );
        console.log(res.status);
        if (res.status === 200) {
          toast.info("Service Provider Successfully Login !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Service Provider Login Sucess");
          window.location.pathname = "/serviceprovider/dashboard";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        } else {
          toast.error("Login Failed!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Login failed");
        }
      } else {
        const res = await axios.post(
          "http://localhost:1000/admins/admin/login",
          data
        );
        console.log(res.status);
        if (res.status === 200) {
          toast.info("Admin Successfully Login !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Admin Login Sucess");
          window.location.pathname = "/admin/dashboard";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        } else {
          toast.error("Admin Login Failed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Admin Login failed");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    loadRole();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <h3 className="mb-4">Login</h3>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="Email"
                    {...register("Email")}
                    className="form-control"
                    placeholder="Enter Your Email..."
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="password"
                    name="Password"
                    {...register("Password")}
                    className="form-control"
                    placeholder="Enter Your Password..."
                  />
                </div>

                <div className="input-group mb-4">
                  <select
                    name="role"
                    {...register("role")}
                    className="form-control"
                    placeholder="Select Your Role..."
                  >
                    <option>Select Role</option>
                    <option>user</option>
                    <option>service_provider</option>
                    <option>admin</option>

                    {/* {role?.map((role) => {
                      return (
                        <>
                          <option value={role._id}>{role.Name}</option>
                        </>
                      );
                    })} */}
                  </select>
                </div>

                <div className="form-group text-left">
                  <button
                    className="btn btn-primary shadow-2 mb-4"
                    type="submit"
                    style={{ marginLeft: "160px" }}
                    value="Login"
                  >
                    Login
                  </button>

                  <p className="mb-2 text-muted">
                    Forgot password?{" "}
                    <a href="auth-reset-password.html">Reset</a>
                  </p>
                  <p className="mb-0 text-muted">
                    Don’t have an account? <Link to="/signup">Signup</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
