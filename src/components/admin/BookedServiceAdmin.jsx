import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";

export const BookedServiceAdmin = () => {
  const [bookservice, setBookService] = useState([]);
  const id = useParams().id;
  const [isLoading, setisLoading] = useState(false);
  const loadBookServiceById = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(
        "http://localhost:1000/bookservices/bookservice/" + id
      );
      console.log(res.data.data);
      setBookService(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    loadBookServiceById();
  }, []);

  return (
    <div className="service-list-container">
      <div className="row">
        {bookservice?.map((bookserv) => {
          return (
            <div className="col-sm-4" key={bookserv._id}>
              <div className="card" style={{ width: "300px", margin: "10px" }}>
                <div className="card-body">
                  <h5 className="card-title">Service Booked</h5>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h6 style={{ flex: "1" }}>
                      {bookserv.ServiceId.Service_Name}
                    </h6>
                    <h6 style={{ fontSize: "18px" }}>{bookserv.Fees}</h6>
                  </span>

                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ alignItems: "center" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
