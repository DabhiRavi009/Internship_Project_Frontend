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
      setservices(res.data.data);
    } catch (err) {
      setservices([]);
    }
  };
  useEffect(() => {
    loadService();
  }, []);
  return (
    <div className="service-list-container" style={{ marginLeft: "280px" }}>
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
                <div className="card-title d-flex justify-content-between mb-10">
                  <h4 className="text-muted mb-0">{serv.Service_Name}</h4>
                  <h4 className="mb-0">{serv.Fees}</h4>
                </div>

                <div>
                  <button className="btn btn-info btn-block">Detail</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
