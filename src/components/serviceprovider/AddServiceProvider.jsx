import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const AddServiceProvider = () => {
  const Navigate = useNavigate();
  const [role, setRole] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const loadRole = async () => {
    try{
      const res = await axios.get(`${baseUrl}/roles/role`);
      setRole(res.data.data);
    }catch(error){
      alert(error)
    }
  };

  useEffect(() => {
    loadRole();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = async (data) => {
    try {
      setisLoading(true);
      const res = await axios.post(
        `${baseUrl}/serviceproviders/serviceprovider`,
        data
      );
      if (res.status === 200) {
        alert("Service Provider Added Successfully !");
        reset();
        Navigate("/admin/manageserviceprovider");
      }
    } catch (error) {
      alert(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="service-list-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
