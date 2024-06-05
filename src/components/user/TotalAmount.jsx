import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../Urls";

export const TotalAmount = () => {
  const [amount, setAmount] = useState([]);
  const id = localStorage.getItem("Id");
  const totalAmount = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/bookservices/bookservice/done/${id}`
      );
      console.log(res.data.data);
      setAmount(res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        var amountBooking = 0;
        for (const booking of res.data.data) {
          amountBooking += booking.Fees;
          setAmount({ totalAmount: amountBooking });
        }
        console.log("Total Amount of Done Bookings:", amountBooking);
      }
    } catch (error) {
      console.log(error.response.data);
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
                        Total Amount (₹)
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
