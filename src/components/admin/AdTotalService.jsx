import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";

export const AdTotalService = () => {
  const [service, setService] = useState([]);
  const id = localStorage.getItem("Id");
  const navigate = useNavigate();

  const loadServices = async () => {
    try {
      const res = await axios.get(`http://localhost:1000/services/service`);
      setService(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleCardClick = () => {
    navigate("../admin/manageservice");
    console.log("function run");
  };

  return (
    <div className="service-list-container">
      <div className="container">
        <div className="row" style={{ width: "900px" }}>
          <div className="col-lg-4">
            <div onClick={handleCardClick}>
              <div className="card card-margin">
                <div className="card-header no-border"></div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-warning">
                        <span className="widget-49-date-day">
                          {service.length}
                        </span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">
                          Total Services
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
