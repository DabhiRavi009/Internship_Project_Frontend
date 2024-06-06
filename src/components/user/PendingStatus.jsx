import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Urls";

export const PendingStatus = () => {
  const [pending, setPending] = useState([]);
  const id = localStorage.getItem("Id");
  const navigate = useNavigate();

  const loadPendingStatus = async () => {
    try {
      const res = await axios.get(`${baseUrl}/bookservices/bookservice/pending/${id}`);
      setPending(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const donePayment = (id) => {
    navigate(`../payment/${id}`);
  };

  useEffect(() => {
    loadPendingStatus();
  }, []);

  return (
    <div className="service-list-container">
      <table
        className="table table-hover"
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
          {pending.map((pen) => (
            <tr key={pen._id}>
              <td>{pen.ServiceId.Service_Name}</td>
              <td>{pen.Fees}</td>
              <td>
                {pen.Status === "pending" ? (
                  <button className="btn btn-danger">{pen.Status}</button>
                ) : (
                  <button className="btn btn-success">{pen.Status}</button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => donePayment(pen._id)}
                >
                  Make Payment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
