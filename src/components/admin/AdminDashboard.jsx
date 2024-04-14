import React, { useState, useEffect } from "react";
import { AdTotalService } from "../admin/AdTotalService.jsx";
import { AdminTotalSP } from "../admin/AdminTotalSP.jsx";
import { Chart } from "../serviceprovider/Chart.jsx";
import { Loader } from "../Loader";
import { AdminAllService } from "./AdminAllService.jsx";
import { AdminBookService } from "./AdminBookService.jsx";

export const AdminDashboard = () => {
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-3 pr-2" style={{ height: "200px" }}>
          <AdTotalService />
        </div>
        <div className="col-3 pl-2">
          <AdminTotalSP />
        </div>
        <div className="col-3 pl-2">
        <AdminBookService />
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
          All BookService
        </h4>
      </div>
      <div>
        <AdminAllService />
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
