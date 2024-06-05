import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const ServiceList = () => {
  const [serviceProvider, setServiceProvider] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Navigate = useNavigate();
  const id = localStorage.getItem("Id");
  console.log("Id", id);

  const featchMyService = async () => {
    try {
      if (id) {
        setisLoading(true);
        const res = await axios.get(
          `${baseUrl}/services/serviceproviderbyserviceid/${id}`
        );
        if (res.status === 200) {
          console.log(res.data.data);
          setServiceProvider(res.data.data);
          setisLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/services/service/` + id);
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
        featchMyService();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const featchData = (id) => {
    Navigate(`../user/featchservice/${id}`);
  };

  useEffect(() => {
    if (id != null || id != undefined) {
      console.log(id);
      featchMyService();
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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

            <div className="service-list-container">
              <div></div>
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
                    <th scope="col" style={{ justifyContent: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceProvider?.map((servPro) => {
                    return (
                      <tr key={servPro._id}>
                        <td>{servPro.Service_Name}</td>
                        <td>{servPro.service_provider.Name}</td>
                        <td>{servPro.category.Name}</td>
                        <td>{servPro.sub_category.Name}</td>
                        <td>{servPro.type.Name}</td>
                        <td>{servPro.Fees}</td>
                        <td>{servPro.City}</td>
                        <td>{servPro.State}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              featchData(servPro._id);
                            }}
                          >
                            Detail
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteService(servPro._id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              Navigate(
                                `/serviceprovider/update/${servPro._id}`
                              );
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
          </div>
        </>
      )}
    </div>
  );
};
