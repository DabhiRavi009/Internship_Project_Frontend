import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Payment.css";

export const Payment = () => {
  const [bookservice, setBookService] = useState([]);
  const Navigate = useNavigate();
  const id = useParams().id;

  const loadBookServiceById = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/bookservices/bookservice/" + id
      );
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookServiceById();
  }, []);

  const updateStatusService = async (id) => {
    try {
      const res = await axios.put(
        "http://localhost:1000/bookservices/bookservice/" + id,
        { Status: "Done" }
      );
      if (res.status === 200) {
        alert("updated");
        console.log("Data Updated");
      } else {
        console.log("Data not updated");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="service-list-container">
        <div className="container mt-5 px-5">
          <div className="mb-4">
            <h2>Confirm order and pay</h2>
            <span>
              please make the payment, after that you can enjoy all the features
              and benefits.
            </span>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <h6 className="text-uppercase">Payment details</h6>
                <form>
                  <div className="inputbox mt-3">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      required="required"
                    />{" "}
                    {/* <span>Name on card</span>{" "} */}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Card Number"
                          required="required"
                        />{" "}
                        <i className="fa fa-credit-card" />{" "}
                        {/* <span>Card Number</span> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-row">
                        <div className="inputbox mt-3 mr-2">
                          {" "}
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Expiry"
                            required="required"
                          />{" "}
                          {/* <span>Expiry</span>{" "} */}
                        </div>
                        <div className="inputbox mt-3 mr-2">
                          {" "}
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="cvv"
                            required="required"
                          />{" "}
                          {/* <span>CVV</span>{" "} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-4 mb-4 d-flex justify-content-between">
                <Link to="/user/allservices">
                  <button className="btn btn-danger px-3">Back </button>
                </Link>
                <button
                  className="btn btn-success px-3"
                  onClick={() => {
                    updateStatusService(id);
                  }}
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
