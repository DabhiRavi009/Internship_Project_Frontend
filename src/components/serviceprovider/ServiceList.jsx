import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ServiceList = () => {
  const [service, setService] = useState([]);
  const Navigate = useNavigate();

  const loadService = async () => {
    try {
      const res = await axios.get("http://localhost:1000/services/service");
      console.log(res.data.data);
      setService(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:1000/services/service/" + id
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
        loadService();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const featchData = (id) => {
    Navigate(`../user/featchservice/${id}`);
  };

  useEffect(() => {
    loadService();
  }, []);

  const searchHandler = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:1000/services/servicefilter",
        {
          params: {
            Service_Name: e.target.value,
          },
        }
      );
      console.log("res in searchHandler", res.data.data);
      setService(res.data.data);
    } catch (err) {
      setService([]);
    }
  };

  return (
    <div className="service-list-container">
      <div>
        <div className="form-outline" data-mdb-input-init="">
          <input
            type="search"
            className="form-control"
            placeholder="Search Service"
            style={{ marginBottom: "20px", width: "99%" }}
            aria-label="Search"
            onChange={(e) => {
              searchHandler(e);
            }}
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Service Name</th>
            <th scope="col">Service Provider</th>
            <th scope="col">Category</th>
            <th scope="col">SubCategory</th>
            <th scope="col">Type</th>
            <th scope="col">Fees</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {service?.map((serv) => {
            return (
              <tr key={serv._id}>
                <td>{serv.Service_Name}</td>
                <td>{serv.service_provider.Name}</td>
                <td>{serv.category.Name}</td>
                <td>{serv.sub_category.Name}</td>
                <td>{serv.type.Name}</td>
                <td>{serv.Fees}</td>
                <td>{serv.City}</td>
                <td>{serv.State}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      featchData(serv._id);
                    }}
                  >
                    Detail
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteService(serv._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      Navigate(`/serviceprovider/update/${serv._id}`);
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
  );
};
