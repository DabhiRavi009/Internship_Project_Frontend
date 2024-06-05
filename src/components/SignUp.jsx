import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./Loader";
import { baseUrl } from "../Urls";

export const SignUp = () => {
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
    Name: {
      required: {
        value: true,
        message: "(Name is Required)",
      },
      maxLength: {
        value: 30,
        message: "(Name should be have only 30 character)",
      },
    },
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
    Contact: {
      required: {
        value: true,
        message: "(Contact is Required)",
      },
      maxLength: {
        value: 10,
        message: "(Contact should be have only 10 character)",
      },
      unique: {
        value: true,
        message: "(Contact must be unique)",
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
    console.log("Form data:", data);
    try {
      setisLoading(true);
      const selectedRole = data.role;
      console.log("Selected role:", selectedRole);
      if (selectedRole === "65e560b6d2104a950a65ac77") {
        const res = await axios.post(`${baseUrl}/users/user`, data);
        console.log(res.status);
        if (res.status === 200) {
          toast.info("User Registered Sucessfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("User Registered Sucessfully");
          window.location.pathname = "/";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        }
      } else if (selectedRole === "65e560d7d2104a950a65b168") {
        const res = await axios.post(
          `${baseUrl}/serviceproviders/serviceprovider`,
          data
        );
        console.log(res.data.data);
        if (res.status === 200) {
          toast.info(" Service Provider Registered Successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Service Provider Registered Sucessfully");
          window.location.pathname = "/";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        }
      } else if (selectedRole === "65fab23815d1121b0919a00a") {
        const res = await axios.post(`${baseUrl}/admins/admin`, data);
        console.log(res.data.data);
        if (res.status === 200) {
          toast.info(" Admin Registered Successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("Admin Registered Sucessfully");
          window.location.pathname = "/";
          console.log(res.data.data);
          localStorage.setItem("Id", res.data.data._id);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    loadRole();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                  <h3 className="mb-4">Sign Up</h3>
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="input-group mb-3">
                        <input
                          name="Name"
                          {...register("Name", validationSchema.Name)}
                          type="text"
                          className="form-control"
                          placeholder="Enter Name..."
                        />
                      </div>
                      <div>
                        <span
                          style={{
                            color: "red",
                            fontSize: "0.8rem",
                          }}
                        >
                          {errors.Name && errors.Name.message}
                        </span>
                      </div>
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
                      <div className="input-group mb-3">
                        <input
                          name="Email"
                          {...register("Email", validationSchema.Email)}
                          type="text"
                          className="form-control"
                          placeholder="Enter Email..."
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
                      <div className="input-group mb-3">
                        <input
                          name="Contact"
                          {...register("Contact", validationSchema.Contact)}
                          type="text"
                          className="form-control"
                          placeholder="Enter Contact..."
                        />
                      </div>
                      <div>
                        <span
                          style={{
                            color: "red",
                            fontSize: "0.8rem",
                          }}
                        >
                          {errors.Contact && errors.Contact.message}
                        </span>
                      </div>
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
                        value="submit"
                      >
                        Register
                      </button>
                      <p className="mb-0 text-muted">
                        Already have an account? <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
