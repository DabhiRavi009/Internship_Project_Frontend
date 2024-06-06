import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { baseUrl } from "../../Urls";

export const TotalService = () => {
  const [total, setTotal] = useState([]);
  const id = localStorage.getItem("Id");

  const loadDonePaymentById = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/services/serviceproviderbyserviceid/${id}`
      );
      setTotal(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadDonePaymentById();
  }, []);

  return (
    <div className="service-list-container">
      <div className="container">
        <div className="row" style={{ width: "900px" }}>
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
                      <span className="widget-49-pro-title">Total Service</span>
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
