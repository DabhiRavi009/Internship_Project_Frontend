import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./Loader";
import { baseUrl } from "../Urls";

export const ResetPassword = () => {
  const [role, setRole] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Email: location?.state?.Email,
      role: location?.state?.role?.Name,
    },
  });

  const loadRole = async () => {
    const res = await axios.get(`${baseUrl}/roles/role`);
    console.log(res.data.data);
    setRole(res.data.data);
  };

  useEffect(() => {
    loadRole();
  }, []);

  const submitHandler = async (data) => {
    setisLoading(false);
    const dataTosend = {
      Email: location?.state?.Email,
      Password: data.Password,
      role: location?.state?.role?.Name,
    };
    try {
      const selectedRole = data.role;
      console.log(selectedRole);
      if (selectedRole === "65e560b6d2104a950a65ac77") {
        const res = await axios.post(
          `${baseUrl}/users/user/resetpassword`,
          data
        );
        if (res.data.flag == 1) {
          console.log("Password Reset Sucessfully");
          alert("User Passsword Reset Successfully...");
          Navigate("/login");
        }
      } else if (selectedRole === "65fab23815d1121b0919a00a") {
        const res = await axios.post(
          `${baseUrl}/admins/admin/resetpassword`,
          data
        );
        if (res.data.flag == 1) {
          console.log("Password Reset Sucessfully");
          alert("Admin Passsword Reset Successfully");
          Navigate("/login");
        }
      } else if (selectedRole === "65e560d7d2104a950a65b168") {
        const res = await axios.post(
          `${baseUrl}/serviceproviders/serviceprovider/resetpassword`,
          data
        );
        if (res.data.flag == 1) {
          Navigate("/login");
          console.log("Password Reset Sucessfully");
          alert("Service Provider Passsword Reset Successfully...");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                <h3 className="mb-4">Reset Password</h3>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="input-group mb-3">
                      <input
                        name="Email"
                        {...register("Email", validationSchema.Email)}
                        type="text"
                        className="form-control"
                        placeholder="Enter Email..."
                      />
                    </div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.Email && errors.Email.message}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="input-group mb-3">
                      <input
                        name="Password"
                        {...register("Password", validationSchema.Password)}
                        type="password"
                        className="form-control"
                        placeholder="Enter Password..."
                      />
                    </div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.Password && errors.Password.message}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="input-group mb-3">
                      <select
                        name="role"
                        {...register("role", validationSchema.role)}
                        className="form-control"
                        placeholder="Select Role..."
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
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                      }}
                    >
                      {errors.role && errors.role.message}
                    </span>
                  </div>

                  <div className="form-group text-left">
                    <button
                      className="btn btn-primary shadow-2 mb-4"
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      value="submit"
                    >
                      Reset
                    </button>
                    <Link to="/forgotpassword">
                      {" "}
                      <button
                        className="btn btn-danger shadow-2 mb-4"
                        type="submit"
                        style={{ marginLeft: "220px", marginTop: "20px" }}
                        value="submit"
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
