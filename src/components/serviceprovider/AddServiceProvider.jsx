import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddServiceProvider = () => {
  const [role, setRole] = useState([]);

  const loadRole = async () => {
    const res = await axios.get("http://localhost:1000/roles/role");
    console.log(res.data.data);
    setRole(res.data.data);
  };

  useEffect(() => {
    loadRole();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    const res = await axios.post(
      "http://localhost:1000/serviceproviders/serviceprovider",
      data
    );
    console.log(res.data.data);
    if (res.status === 200) {
      toast.info(" Service Provider Added Successfully !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      reset();
    }
  };
  return (
    <>
      <div className="service-list-container">
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
            <div className="card">
              <div className="card-body text-center">
                <h3 className="mb-4">Add Service Provider</h3>

                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="input-group mb-3">
                    <input
                      name="Name"
                      {...register("Name")}
                      type="text"
                      className="form-control"
                      placeholder="Enter Name..."
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      name="Password"
                      {...register("Password")}
                      type="password"
                      className="form-control"
                      placeholder="Enter Password..."
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      name="Email"
                      {...register("Email")}
                      type="text"
                      className="form-control"
                      placeholder="Enter Email..."
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      name="Contact"
                      {...register("Contact")}
                      type="text"
                      className="form-control"
                      placeholder="Enter Contact..."
                    />
                  </div>

                  <div className="input-group mb-3">
                    <select
                      name="role"
                      {...register("role")}
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
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
