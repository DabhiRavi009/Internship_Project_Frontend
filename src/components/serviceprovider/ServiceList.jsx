import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const ServiceList = () => {
  const [serviceProvider, setServiceProvider] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Navigate = useNavigate();
  const id = localStorage.getItem("Id");

  const featchMyService = async () => {
    try {
      if (id) {
        setisLoading(true);
        const res = await axios.get(
          `${baseUrl}/services/serviceproviderbyserviceid/${id}`
        );
        if (res.status === 200) {
          setServiceProvider(res.data.data);
          setisLoading(false);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/services/service/` + id);
      if (res.status === 200) {
        alert("Service Deleted Successfully!");
        featchMyService();
      }
    } catch (error) {
      alert(error);
    }
  };

  const featchData = (id) => {
    try {
      Navigate(`../user/featchservice/${id}`);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (id !== null || id !== undefined) {
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
