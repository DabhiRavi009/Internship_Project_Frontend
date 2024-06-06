import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { baseUrl } from "../../Urls";

export const AdminTotalSP = () => {
  const [totalSP, setTotalSP] = useState([]);
  const navigate = useNavigate();

  const loadServiceProvider = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/serviceproviders/serviceprovider`
      );
      setTotalSP(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadServiceProvider();
  }, []);

  const handleCardClick = () => {
    try{
      navigate("../admin/manageserviceprovider");
    }
    catch(error){
      alert(error);
    }
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
                          {totalSP.length}
                        </span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">
                          Total ServiceProvider
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
