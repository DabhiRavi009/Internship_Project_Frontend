import React from "react";
import { BookedService } from "./BookedService";
import { Chart } from "../serviceprovider/Chart.jsx";
import { DonePayment } from "./DonePayment.jsx";
import { PendingStatus } from "./PendingStatus.jsx";
import { TotalAmount } from "./TotalAmount.jsx";

export const UserDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-3 pr-2" style={{ height: "200px" }}>
          <BookedService />
        </div>
        <div className="col-3 pl-2">
          <DonePayment />
        </div>
        <div className="col-3 pl-2">
          <TotalAmount />
        </div>
      </div>
      <div style={{ marginLeft: "260px", marginTop: "10px" }}>
        <h4
          style={{
            padding: "12px",
            background: "skyblue",
            marginLeft: "10px",
            width: "1000px",
            color: "white",
            height: "50px",
            borderRadius: "10px",
          }}
        >
          Pending Booking
        </h4>
      </div>
      <div>
        <PendingStatus />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px pink solid",
            borderRadius: "10px",
            marginLeft: "260px",
            marginBottom: "40px",
          }}
        >
          <Chart />
        </div>
      </div>
    </>
  );
};
