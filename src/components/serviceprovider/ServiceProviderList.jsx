import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const ServiceProviderList = () => {
  const [serviceProvider, setServiceProvider] = useState([]);
  const Navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const loadServiceProvider = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(
        `${baseUrl}/serviceproviders/serviceprovider`
      );
      setServiceProvider(res.data.data);
    } catch (error) {
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  const deleteServiceProvider = async (id) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/serviceproviders/serviceprovider/` + id
      );
      if (res.status === 200) {
        alert("Service Provider Deleted Successfully!");
        loadServiceProvider();
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadServiceProvider();
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
                {serviceProvider?.map((servpro) => {
                  return (
                    <tr>
                      <td>{servpro.Name}</td>
                      <td>{servpro.Email}</td>
                      <td>{servpro.Contact}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteServiceProvider(servpro._id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            Navigate(
                              `/serviceprovider/serviceproviderupdate/${servpro._id}`
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
        </>
      )}
    </>
  );
};
