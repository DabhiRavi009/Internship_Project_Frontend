import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const UserList = () => {
  const [user, setUser] = useState([]);
  const Navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const loadUser = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(`${baseUrl}/users/user`);
      setUser(res.data.data);
    } catch (error) {
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/users/user` + id);
      if (res.status === 200) {
        alert("User Deleted Successfully!");
        loadUser();
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="service-list-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((u) => {
                  return (
                    <tr>
                      <td>{u.Name}</td>
                      <td>{u.Email}</td>
                      <td>{u.Contact}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(u._id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            Navigate(`/user/update/${u._id}`);
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};
