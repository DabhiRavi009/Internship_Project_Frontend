import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../Urls";

export const TotalFees = () => {
  const [amount, setAmount] = useState("0");
  const id = localStorage.getItem("Id");

  const totalAmount = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/bookservices/bookservice/donesp/${id}`
      );
      let totalAmount = 0;
      if (res.data.data && res.data.data.length > 0) {
        for (const booking of res.data.data) {
          totalAmount += booking.Fees;
        }
      }
      setAmount({ totalAmount });
    } catch (error) {
      alert(error.response.data);
    }
  };

  useEffect(() => {
    totalAmount();
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
                      <span className="widget-49-date-day">
                        {amount.totalAmount}
                      </span>
                    </div>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">
                        Total Earning (₹)
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
  );
};
