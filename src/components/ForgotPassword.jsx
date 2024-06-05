import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./Loader";
import { baseUrl } from "../Urls";

export const ForgotPassword = () => {
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

  useEffect(() => {
    loadRole();
  }, []);

  const submitHandler = async (data) => {
    try {
      setisLoading(true);
      const selectedRole = data.role;
      console.log(selectedRole);
      if (selectedRole === "65e560b6d2104a950a65ac77") {
        const res = await axios.post(`${baseUrl}/users/user/isuserexist`, data);
        if (res.data.flag == 1) {
          console.log("Email exist", res.data.data.Email);
          Navigate("/resetpassword", {
            state: {
              Email: res.data.data.Email,
              role: res.data.data.role.Name,
            },
          });
        }
      } else if (selectedRole === "65fab23815d1121b0919a00a") {
        const res = await axios.post(
          `${baseUrl}/admins/admin/isadminexist`,
          data
        );
        if (res.data.flag == 1) {
          console.log("Email exist", res.data.data.Email);
          Navigate("/resetpassword", {
            state: {
              Email: res.data.data.Email,
              role: res.data.data.role.Name,
            },
          });
        }
      } else if (selectedRole === "65e560d7d2104a950a65b168") {
        const res = await axios.post(
          `${baseUrl}/serviceproviders/serviceprovider/isserviceproviderexist`,
          data
        );
        if (res.data.flag == 1) {
          console.log("Email exist", res.data.data.Email);
          Navigate("/resetpassword", {
            state: {
              Email: res.data.data.Email,
              role: res.data.data.role.Name,
            },
          });
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
                <div className="mb-4"></div>
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
                      Submit
                    </button>
                    <Link to="/login">
                      <button
                        className="btn btn-primary shadow-2 mb-4"
                        type="submit"
                        style={{ marginRight: "10px" }}
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
