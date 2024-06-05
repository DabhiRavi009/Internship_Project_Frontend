import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./Loader";
import { baseUrl } from "../Urls";

export const Login = () => {
  const [role, setRole] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validationSchema = {
    Email: {
      required: {
        value: true,
        message: "(Email is Required)",
      },
      maxLength: {
        value: 30,
        message: "(Email should be have only 30 character)",
      },
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "(Email should be valid)",
      },
      unique: {
        value: true,
        message: "(Email must be unique)",
      },
    },
    Password: {
      required: {
        value: true,
        message: "(Password is Required)",
      },
      maxLength: {
        value: 20,
        message: "(Password should be have only 20 character)",
      },
    },
    role: {
      required: {
        value: true,
        message: "(Role is Required)",
      },
    },
  };

  const loadRole = async () => {
    const res = await axios.get(`${baseUrl}/roles/role`);
    console.log(res.data.data);
    setRole(res.data.data);
  };

  const submitHandler = async (data) => {
    console.log(data);
    try {
      // setisLoading(true);
      const selectedRole = data.role;
      console.log(selectedRole);
      if (selectedRole === "65e560b6d2104a950a65ac77") {
        const res = await axios.post(`${baseUrl}/users/user/login`, data);
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
      } else if (selectedRole === "65e560d7d2104a950a65b168") {
        const res = await axios.post(
          `${baseUrl}/serviceproviders/serviceprovider/login`,
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
      } else if (selectedRole === "65fab23815d1121b0919a00a") {
        const res = await axios.post(`${baseUrl}/admins/admin/login`, data);
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
      reset();
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      // setisLoading(false);
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
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="Email"
                      {...register("Email", validationSchema.Email)}
                      className="form-control"
                      placeholder="Enter Your Email..."
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.Email && errors.Email.message}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="input-group mb-4">
                    <input
                      type="password"
                      name="Password"
                      {...register("Password", validationSchema.Password)}
                      className="form-control"
                      placeholder="Enter Your Password..."
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.Password && errors.Password.message}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="input-group mb-4">
                    <select
                      name="role"
                      {...register("role", validationSchema.role)}
                      className="form-control"
                      placeholder="Select Your Role..."
                    >
                      <option>Select Role</option>

                      {role?.map((role) => {
                        return (
                          <>
                            <option value={role._id}>{role.Name}</option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.role && errors.role.message}
                    </span>
                  </div>
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
                    Forgot password? <Link to="/forgotpassword">Reset</Link>
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
