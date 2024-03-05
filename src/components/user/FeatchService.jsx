import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FeatchService = () => {
  const [service, setservice] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadServiceById();
  }, []);
  return (
    <div className="service-list-container">
      <div
        className="d-flex m-auto flex-wrap"
        style={{
          width: "25rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {service?.map((serv) => {
          return (
            <div className="card">
              <img src={serv.imageUrl} className="card-img-top" alt="" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h2 style={{ textTransform: "uppercase" }}>
                  {serv.Service_Name}
                </h2>
                <h6>Category : {serv.category.Name}</h6>
                <h6>Sub Category : {serv.sub_category.Name}</h6>
                <h6>Type: {serv.type.Name}</h6>
                <h6>Area: {serv.Area}</h6>
                <h6>City: {serv.City}</h6>
                <h6>State: {serv.State}</h6>
                <h3>{serv.Fees}</h3>
                <button className="btn btn-info">Book Service</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
