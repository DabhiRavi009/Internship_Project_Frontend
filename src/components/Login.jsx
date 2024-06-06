import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../Urls";

export const Login = () => {
  const [role, setRole] = useState([]);
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
    try {
      const res = await axios.get(`${baseUrl}/roles/role`);
      setRole(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = async (data) => {
    try {
      const selectedRole = data.role;
      if (selectedRole === "65e560b6d2104a950a65ac77") {
        const res = await axios.post(`${baseUrl}/users/user/login`, data);
        if (res.status === 200) {
          alert("User Login Sucess");
          window.location.pathname = "/user/dashboard";
          localStorage.setItem("Id", res.data.data._id);
        } else {
          alert("User Login failed");
        }
      } else if (selectedRole === "65e560d7d2104a950a65b168") {
        const res = await axios.post(
          `${baseUrl}/serviceproviders/serviceprovider/login`,
          data
        );
        if (res.status === 200) {
          alert("Service Provider Login Sucess");
          window.location.pathname = "/serviceprovider/dashboard";
          localStorage.setItem("Id", res.data.data._id);
        } else {
          alert("Login failed");
        }
      } else if (selectedRole === "65fab23815d1121b0919a00a") {
        const res = await axios.post(`${baseUrl}/admins/admin/login`, data);
        if (res.status === 200) {
          alert("Admin Login Sucess");
          window.location.pathname = "/admin/dashboard";
          localStorage.setItem("Id", res.data.data._id);
        } else {
          alert("Admin Login failed");
        }
      }
      reset();
    } catch (error) {
      alert("An error occurred:", error);
    } finally {
    }
  };

  useEffect(() => {
    loadRole();
  }, []);

  return (
    <>
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
