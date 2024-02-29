import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

export const ServiceList = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();

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
        toast.success(" Service Deleted Successfully !", {
          position: "top-center",
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

  useEffect(() => {
    loadService();
  }, []);

  return (
    <div>
      <div className="service-list-container">
        <div>
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
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Service Provider</th>
                <th scope="col">Category</th>
                <th scope="col">SubCategory</th>
                <th scope="col">Type</th>
                <th scope="col">Fees</th>
                <th scope="col">Area</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">File</th>
                <th scope="col">Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {service?.map((serv) => {
                return (
                  <tr key={serv._id}>
                    <td>{serv.Service_Name}</td>
                    <td>{serv.service_provider.Name}</td>
                    <td>{serv.category.Name}</td>
                    <td>{serv.sub_category.Name}</td>
                    <td>{serv.type.Name}</td>
                    <td>{serv.Fees}</td>
                    <td>{serv.Area}</td>
                    <td>{serv.City}</td>
                    <td>{serv.State}</td>
                    <td>{serv.imageUrl}</td>
                    <td>
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
                          navigate(`/serviceprovider/update/${serv._id}`);
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};
