import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const FeatchService = () => {
  const Navigate = useNavigate();
  const [service, setservice] = useState([]);
  const [Id, SetId] = useState();
  const id = useParams().id;

  const loadServiceById = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/services/service/" + id
      );
      console.log(res.data.data);
      const responseData = Array.isArray(res.data.data)
        ? res.data.data
        : [res.data.data];
      setservice(responseData);
      // await SetId(res.data.data._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadServiceById();
  }, []);

  const bookService = async () => {
    if (service.length === 0) {
      alert("Service data not loaded");
      console.error("Service data not loaded");
      return;
    }
    const serviceproviderId = service[0]?.service_provider?._id;
    const userId = localStorage.getItem("Id");
    const serviceId = id;
    const amount = service[0].Fees;

    const objOfService = {
      ServiceId: serviceId,
      service_provider: serviceproviderId,
      user: userId,
      Fees: amount,
    };
    console.log("objOfService", objOfService);

    try {
      const res = await axios.post(
        "http://localhost:1000/bookservices/bookservice",
        objOfService
      );
      console.log(res.data.data);
      if (res.status === 200) {
        alert("Service post");
        console.log("Service Booked");
        await SetId(res.data.data._id);
        // console.log("Id in params", Id);
        Navigate(`/payment/${res.data.data._id}`);
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="service-list-container">
      {service.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          <div className="container py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-9 col-lg-7 col-xl-5">
                <div className="card">
                  {service?.map((serv) => {
                    return (
                      <>
                        <img
                          src={serv.imageUrl}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <div className="card-title d-flex justify-content-between mb-0">
                            <h3 className="text-muted mb-0">
                              {serv.Service_Name}
                            </h3>
                            <h3 className="mb-0">{serv.Fees}</h3>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom"
                          style={{ backgroundColor: "#eee" }}
                        >
                          <div className="card-body">
                            <h4
                              className="mb-4"
                              style={{ textAlign: "center" }}
                            >
                              Your Service details
                            </h4>
                            <div className="form-outline mb-3">
                              <p>{serv.service_provider.Name}</p>
                              <p>{serv.category.Name}</p>
                              <p>{serv.sub_category.Name}</p>
                              <p>{serv.type.Name}</p>
                              <p>{serv.Area}</p>
                              <p>{serv.City}</p>
                              <p>{serv.State}</p>
                            </div>
                            <div className="row mb-3">
                              <div className="col-6">
                                <div className="form-outline"></div>
                              </div>
                              <div className="col-6">
                                <div className="form-outline"></div>
                              </div>
                            </div>
                            <button
                              className="btn btn-info btn-block"
                              onClick={() => {
                                bookService();
                              }}
                            >
                              Book Service
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
