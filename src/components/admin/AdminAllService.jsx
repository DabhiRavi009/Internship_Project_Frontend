import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminAllService = () => {
  const [services, setServices] = useState([]);
  const id = localStorage.getItem("Id");
  const Navigate = useNavigate();

  const loadAllServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/bookservices/bookservice"
      );
      console.log(res.data.data);
      setServices(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:1000/bookservices/bookservice/" + id
      );
      if (res.status === 200) {
        toast.info("Service Deleted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        loadAllServices();
      }
    } catch (error) {
      console.log(error);
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
                  <tr>
                    <td scope="row">{serv.ServiceId.Service_Name}</td>
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
                        className="btn btn-info" style={{ width: "150px" }}
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
