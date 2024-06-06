import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../Urls";

export const AdminAllService = () => {
  const [services, setServices] = useState([]);

  const loadAllServices = async () => {
    try {
      const res = await axios.get(`${baseUrl}/bookservices/bookservice`);
      setServices(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/bookservices/bookservice/` + id
      );
      if (res.status === 200) {
        alert("Service Deleted Successfully.");
        loadAllServices();
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    loadAllServices();
  }, []);
  return (
    <>
      <div className="service-list-container">
        <table
          class="table table-hover"
          style={{ border: "1px pink solid", borderRadius: "10px" }}
        >
          <thead>
            <tr>
              <th scope="col">Service Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((serv) => {
              return (
                <>
                  <tr>
                    <td>{serv.ServiceId.Service_Name}</td>
                    <td>{serv.Fees}</td>
                    <td>{serv.user.Name}</td>
                    <td>
                      {serv.Status === "pending" ? (
                        <button
                          className="btn btn-danger"
                          style={{ width: "150px" }}
                        >
                          {serv.Status}
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          style={{ width: "150px" }}
                        >
                          {serv.Status}
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        style={{ width: "150px" }}
                        onClick={() => {
                          deleteService(serv._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
