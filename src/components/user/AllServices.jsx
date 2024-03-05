import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AllServices = () => {
  const [services, setservices] = useState([]);
  const Navigate = useNavigate();
  const loadService = async () => {
    try {
      const res = await axios.get("http://localhost:1000/services/service");
      console.log(res.data.data);
      setservices(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const featchData = (id) => {
    Navigate(`/user/featchservice/${id}`);
  };

  useEffect(() => {
    loadService();
  }, []);
  return (
    <div className="service-list-container">
      <div className="d-flex m-auto flex-wrap">
        {services?.map((serv, index) => {
          return (
            <div
              className="card"
              onClick={() => {
                featchData(serv._id);
              }}
              style={{
                width: "18rem",
                margin: "0px 30px 30px 0",
              }}
              key={index}
            >
              <img src={serv.imageUrl} className="card-img-top" alt="" />
              <div className="card-body">
                <h4>{serv.Service_Name}</h4>
                <h6>{serv.category.Name}</h6>
                <h6>{serv.sub_category.Name}</h6>
                <h6>{serv.type.Name}</h6>
                <h3>{serv.Fees}</h3>
                <button className="btn btn-info" style={{ marginLeft: "80px" }}>
                  Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
