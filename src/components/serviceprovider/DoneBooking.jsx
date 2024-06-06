import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../Urls";

export const DoneBooking = () => {
  const [done, setDone] = useState([]);
  const id = localStorage.getItem("Id");

  const loadDoneStatus = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/bookservices/bookservice/donesp/${id}`
      );
      setDone(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadDoneStatus();
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
            </tr>
          </thead>
          <tbody>
            {done?.map((done) => {
              return (
                <>
                  <tr>
                    <td>{done.ServiceId.Service_Name}</td>
                    <td>{done.Fees}</td>
                    <td>
                      <button className="btn btn-success">{done.Status}</button>
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
