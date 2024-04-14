import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";

export const AllServices = () => {
  const [services, setservices] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Navigate = useNavigate();
  const loadService = async () => {
    try {
      setisLoading(true);
      const res = await axios.get("http://localhost:1000/services/service");
      console.log(res.data.data);
      setservices(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                    transform: "scale(1.05)",
                    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  key={index}
                >
                  <img
                    src={serv.imageUrl}
                    className="card-img-top"
                    alt=""
                    style={{ width: "100%", height: "200px" }}
                  />
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
        </>
      )}
    </div>
  );
};
