// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../assest/Css/BookedService.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const BookedServiceAdmin = () => {
//   const [bookservice, setBookService] = useState([]);
//   const id = useParams().id;

//   const loadBookServiceById = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:1000/bookservices/bookservice/" + id
//       );
//       console.log(res.data.data);
//       setBookService(res.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadBookServiceById();
//   }, []);

//   return (
//     <div className="service-list-container" style={{ marginLeft: "280px" }}>
//       <div className="container">
//         <div className="row">
//           {bookservice.map((bookserv) => (
//             <div className="col-md-4 col-xl-3" key={bookserv._id}>
//               <div className="card-container">
//                 <div className="card bg-c-pink order-card">
//                   <div className="card-block">
//                     <h6 className="m-b-20">{bookserv.user.Name}</h6>
//                     <h2 className="text-right">
//                       <i className="fa fa-cart-plus f-left" />
//                       <span>{bookserv.Fees}</span>
//                     </h2>
//                     <p className="m-b-0">
//                       Service Booked
//                       <span className="f-right">
//                         {bookserv.ServiceId.Service_Name}
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assest/Css/BookedService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookedServiceAdmin = () => {
  const [bookservice, setBookService] = useState([]);
  const id = useParams().id;

  const loadBookServiceById = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/bookservices/bookservice/" + id
      );
      console.log(res.data.data);
      setBookService(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookServiceById();
  }, []);

  return (
    <div className="service-list-container" style={{ marginLeft: "280px" }}>
      <div className="container">
        <div className="row">
          {bookservice.map((bookserv) => (
            <div className="col-md-4 col-xl-3" key={bookserv._id}>
              <div
                className="card-container"
                style={{ display: "flex", justifyontent: "center" }}
              >
                <div
                  className="card bg-c-pink order-card"
                  style={{
                    marginBottom: "40px",
                    width: "1000px",
                    height: "200px",
                  }}
                >
                  <div className="card-block">
                    <p className="m-b-0" style={{ marginBottom: "20px" }}>
                      {bookserv.user.Name}
                    </p>
                    <h2 className="text-right">
                      <i className="fa fa-cart-plus f-left" />
                      <span>{bookserv.Fees}</span>
                    </h2>
                    <p className="m-b-0">
                      Service Booked
                      <span className="f-right">
                        {bookserv.ServiceId.Service_Name}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
