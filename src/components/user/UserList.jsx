import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserList = () => {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:1000/users/user");
      console.log(res.data.data);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="service-list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">User_Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((u) => {
            return (
              <tr>
                <td>{u.User_Name}</td>
                <td>{u.Email}</td>
                <td>{u.Contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
