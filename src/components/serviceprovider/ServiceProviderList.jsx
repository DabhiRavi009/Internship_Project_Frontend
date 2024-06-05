import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      console.log(res.data.data);
      setServiceProvider(res.data.data);
    } catch (error) {
      console.log(error);
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
        toast.info("Service Provider Deleted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        loadServiceProvider();
      }
    } catch (error) {
      console.log(error);
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
