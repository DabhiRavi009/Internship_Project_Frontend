import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const PendingStatus = () => {
  const [pending, setPending] = useState([]);
  const id = localStorage.getItem("Id");
  const Navigate = useNavigate();

  const loadPendingStatus = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/bookservices/bookservice/pending/" + id
      );
      console.log(res.data.data);
      setPending(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DonePayment = async (id) => {
    Navigate(`../payment/${id}`);
  };
  useEffect(() => {
    loadPendingStatus();
  }, []);
  return (
    <>
      <div className="service-list-container">
        <table
          class="table table-hover"
          style={{ border: "1px pink solid", borderRadius: "10px" }}
        >
          <thead>
            <tr>
              <th scope="col">Service Name</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pending?.map((pen) => {
              return (
                <>
                  <tr>
                    <td scope="row">{pen.ServiceId.Service_Name}</td>
                    <td>{pen.Fees}</td>
                    <td>
                      {pen.Status === "pending" ? (
                        <button className="btn btn-danger">{pen.Status}</button>
                      ) : (
                        <button className="btn btn-success">
                          {pen.Status}
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          DonePayment(pen._id);
                        }}
                      >
                        Make Payment
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
