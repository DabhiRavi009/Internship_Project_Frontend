import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:1000/serviceproviders/serviceprovider/login",
        data
      );
      console.log(res.status);
      if (res.status === 200) {
        toast.success(" Successfully Login !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Login Sucess");
        Navigate("/serviceprovider/dashboard");
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
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
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
                <div className="form-group text-left">
                  <div className="checkbox checkbox-fill d-inline">
                    <input
                      {...register("checkbox-fill-1")}
                      type="checkbox"
                      name="checkbox-fill-1"
                      id="checkbox-fill-a1"
                      defaultChecked=""
                    />
                    <label htmlFor="checkbox-fill-a1" className="cr">
                      {" "}
                      Save Details
                    </label>
                  </div>

                  <button
                    className="btn btn-primary shadow-2 mb-4"
                    type="submit"
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
