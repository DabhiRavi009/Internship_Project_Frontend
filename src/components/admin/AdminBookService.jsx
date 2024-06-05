import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const AdminBookService = () => {
  const [service, setService] = useState([]);
  const id = localStorage.getItem("Id");
  const navigate = useNavigate();

  const loadBookService = async () => {
    try {
      const res = await axios.get(`${baseUrl}/bookservices/bookservice`);
      setService(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookService();
  }, []);

  const handleCardClick = () => {
    navigate("../admin/adminbookedservice");
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
                          Total BookService
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
