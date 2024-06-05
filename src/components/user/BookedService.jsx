import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

export const BookedService = () => {
  const [total, setTotalBook] = useState([]); // Provide an initial value of an empty array
  const [isLoading, setisLoading] = useState(false);
  const id = localStorage.getItem("Id");

  const loadBookServiceById = async () => {
    try {
      const res = await axios.get(`${baseUrl}/bookservices/bookservice/` + id);
      console.log(res.data.data);
      setTotalBook(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      // setisLoading(false);
    }
  };

  useEffect(() => {
    loadBookServiceById();
  }, []);

  return (
    <div className="service-list-container">
      <div className="container">
        <div className="row" style={{ width: "900px", height: "700px" }}>
          <div className="col-lg-4">
            <div className="card card-margin">
              <div className="card-header no-border"></div>
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <div className="widget-49-date-warning">
                      <span className="widget-49-date-day">{total.length}</span>
                    </div>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">Total Booking</span>
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
