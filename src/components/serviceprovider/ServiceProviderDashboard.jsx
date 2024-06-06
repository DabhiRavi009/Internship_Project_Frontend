import React from "react";
import { TotalService } from "../serviceprovider/TotalService.jsx";
import { Chart } from "../serviceprovider/Chart.jsx";
import { TotalBooking } from "../serviceprovider/TotalBooking.jsx";
import { TotalFees } from "../serviceprovider/TotalAmount.jsx";
import { DoneBooking } from "../serviceprovider/DoneBooking.jsx";

export const ServiceProviderDashboard = () => {

  return (
    <>
      <div className="row">
        <div className="col-3 pr-2" style={{ height: "200px" }}>
          <TotalService />
        </div>
        <div className="col-3 pl-2">
          <TotalBooking />
        </div>
        <div className="col-3 pl-2">
          <TotalFees />
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
          Done Booking
        </h4>
      </div>
      <div>
        <DoneBooking />
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
