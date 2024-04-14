import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const DoneBooking = () => {
  const [done, setDone] = useState([]);
  const id = localStorage.getItem("Id");
  const Navigate = useNavigate();

  const loadDoneStatus = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/bookservices/bookservice/donesp/${id}`
      );
      console.log(res.data.data);
      setDone(res.data.data);
    } catch (error) {
      console.log(error);
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
                    <td scope="row">{done.ServiceId.Service_Name}</td>
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
