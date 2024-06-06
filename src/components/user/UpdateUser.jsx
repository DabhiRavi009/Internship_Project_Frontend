import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const UpdateUser = () => {
  const id = useParams().id;
  const [isLoading, setisLoading] = useState(false);
  const Navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: async () => {
      const res = await axios.get(`${baseUrl}/users/user/` + id);
      return {
        Name: res.data.data.Name,
        Password: res.data.data.Password,
        Email: res.data.data.Email,
        Contact: res.data.data.Contact,
      };
    },
  });

  const [role, setRole] = useState([]);

  const submitHandler = async (data) => {
    try {
      setisLoading(true);
      const res = await axios.put(`${baseUrl}/users/user/` + id, data);
      if (res.status === 200) {
        alert("User Updated Successfully!");
        reset();
        Navigate("/user/userlist");
      }
    } catch (error) {
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  const loadRole = async () => {
    try{

    }catch(error){
      alert(error)
    }
    const res = await axios.get(`${baseUrl}/roles/role`);
    setRole(res.data.data);
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
          <div className="auth-wrapper">
            <div className="auth-content">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="mb-4">Update User</h3>
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
                        value="Update"
                        className="btn btn-info"
                      ></input>
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
