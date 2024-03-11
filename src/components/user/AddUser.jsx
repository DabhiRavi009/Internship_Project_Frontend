import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = () => {
  const [role, setRole] = useState([]);
  const loadRole = async () => {
    const res = await axios.get("http://localhost:1000/roles/role");
    console.log(res.data.data);
    setRole(res.data.data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    const res = await axios.post("http://localhost:1000/users/user", data);
    console.log(res.status);
    if (res.status === 200) {
      toast.success("User Added Sucessfully !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("User Added fully");
      window.location.pathname = "/user/userlist";
      console.log(res.data.data);
      localStorage.setItem("Id", res.data.data._id);
    }
  };

  useEffect(() => {
    loadRole();
  }, []);
  return (
    <div className="service-list-container">
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="mb-4">Add User</h3>
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
  );
};
