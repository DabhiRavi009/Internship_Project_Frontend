import React from "react";
import { Chart } from "./Chart";

export const ServiceProviderDashboard = () => {
  return (
    <>
      <Chart />
      <div className="service-list-container"></div>
    </>
  );
};

// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet';
// import {
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   Chart,
//   LinearScale,
//   LineElement,
// } from "chart.js";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import { Link } from "react-router-dom";
// Chart.register(CategoryScale);
// Chart.register(ArcElement);
// Chart.register(LinearScale);
// Chart.register(BarElement);

// export const ServiceProviderDashboard = () => {
//   const [data, setdata] = useState({
//     labels: [],
//     datasets: [],
//   });

//   const [book, setbook] = useState([]);
//   const [totalBook, setTotalBook] = useState([]);
//   const [doneBook, setDoneBook] = useState([]);
//   const [amount, setamount] = useState([]);

//   const id = localStorage.getItem("id");
//   const totalAmount = async () => {
//     try {
//       const res = await axios.get(
//         http://localhost:4000/book/doneStatusServiceProvider/${id}
//       );
//       console.log(res.data.data);
//       setamount(res.data.data);
//       if (res.data.data && res.data.data.length > 0) {
//         var amountBooking = 0;
//         for (const booking of res.data.data) {
//           amountBooking += booking.totalAmount;
//           setamount({ totalAmount: amountBooking });
//         }
//         console.log("Total Amount of Done Bookings:", amountBooking);
//       }
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   const getBookingByServiceProviderId = async () => {
//     try {
//       const res = await axios.get(
//         http://localhost:4000/service/service/provider/${id}
//       );
//       console.log(res.data.data);
//       // Update totalBook with the array of all bookings
//       setTotalBook(res.data.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   const getDoneBookingById = async () => {
//     try {
//       const res = await axios.get(
//         http://localhost:4000/book/doneStatusServiceProvider/${id}
//       );
//       console.log(res.data.data);
//       setbook(res.data.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   const getDoneBooking = async () => {
//     try {
//       const res = await axios.get(
//         http://localhost:4000/book/doneStatusServiceProvider/${id}
//       );
//       if (res.data && res.data.data) {
//         console.log(res.data.data);
//         // Update doneBook with the array of done bookings
//         setDoneBook(res.data.data);
//       } else {
//         console.error("Invalid response format:", res);
//       }
//     } catch (error) {
//       console.error("Error fetching done bookings:", error);
//     }
//   };

//   const getAllservice = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/service/service");
//       console.log("service", res.data.data);
//       if (res.data.data && res.data.data.length > 0) {
//         const categoryCounts = {};

//         for (const service of res.data.data) {
//           // service ma category che k nai check karse
//           if (service.category) {
//             //category nu name set karse
//             const categoryName = service.category.name;
//             //check karse k categoryName pelethi che k nai
//             if (categoryCounts[categoryName]) {
//               // jo hoy toh count vadhshe
//               categoryCounts[categoryName]++;
//             } else {
//               // navi category aave toh ene count ma add kari ne initial value 1 aapse
//               categoryCounts[categoryName] = 1;
//             }
//           }
//         }

//         const transformedData = {
//           labels: Object.keys(categoryCounts),
//           datasets: [
//             {
//               label: "Service",
//               data: Object.values(categoryCounts).map(value => Math.floor(value)),
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         };
//         setdata(transformedData);
//       }
//     } catch (error) {
//       console.error("Error fetching service:", error);
//       alert("Error fetching service");
//     }
//   };

//   useEffect(() => {
//     getAllservice();
//     getDoneBookingById();
//     getDoneBooking();
//     getBookingByServiceProviderId();
//     totalAmount();
//   }, []);
//   return (
//     <>
//       <Helmet>
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
//         />

//         <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
//         <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

//         <script
//           src="https://kit.fontawesome.com/42d5adcbca.js"
//           crossorigin="anonymous"
//         ></script>

//         <link
//           href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
//           rel="stylesheet"
//         />

//         <link
//           id="pagestyle"
//           href="../../assets/css/material-dashboard.css?v=3.0.0"
//           rel="stylesheet"
//         />
//       </Helmet>
//       <div className="container-fluid py-4">
//         <div className="row mt-5">
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 me-5">
//             <div className="card">
//               <div className="card-header p-3 pt-2">
//                 <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
//                   <i className="material-icons opacity-10">weekend</i>
//                 </div>
//                 <div className="text-end pt-1">
//                   <p className="text-sm mb-0 text-capitalize">Total Services</p>
//                   <br />
//                   <h4 className="mb-0">{totalBook.length}</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div className="card-footer p-3"></div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 me-5">
//             <div className="card">
//               <div className="card-header p-3 pt-2">
//                 <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
//                   <i className="material-icons opacity-10">person</i>
//                 </div>
//                 <div className="text-end pt-1">
//                   <p className="text-sm mb-0 text-capitalize">Bookings</p>
//                   <br />
//                   <h4 className="mb-0">{doneBook.length}</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div className="card-footer p-3"></div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6 me-5">
//             <div className="card">
//               <div className="card-header p-3 pt-2">
//                 <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
//                   <i className="material-icons opacity-10">weekend</i>
//                 </div>
//                 <div className="text-end pt-1">
//                   <p className="text-sm mb-0 text-capitalize">Total Earning</p>
//                   <br />
//                   <h4 className="mb-0">${amount.totalAmount}</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div className="card-footer p-3">
//                 <p className="mb-0"></p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="card my-4">
//               <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
//                 <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
//                   <h6 className="text-white text-capitalize ps-3">
//                     Done Booking
//                   </h6>
//                 </div>
//               </div>
//               <div className="card-body px-0 pb-2">
//                 <div className="table-responsive p-0">
//                   <table className="table align-items-center mb-0">
//                     <thead>
//                       <tr>
//                         <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
//                           Service Name
//                         </th>
//                         <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
//                           Total Amount
//                         </th>
//                         <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
//                           Status
//                         </th>
//                         <th className="text-secondary opacity-7" />
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {book?.map((booking) => {
//                         return (
//                           <tr>
//                             <td>
//                               <div className="d-flex flex-column justify-content-center">
//                                 <h6 className="mb-0 text-sm">
//                                   {booking?.service?.servicename}
//                                 </h6>
//                               </div>
//                             </td>
//                             <td>
//                               <p className="text-xs font-weight-bold mb-0">
//                                 {booking?.service?.fees}
//                               </p>
//                             </td>
//                             <td className="align-middle text-center text-sm">
//                               <span className="badge badge-sm bg-gradient-success">
//                                 {booking.status}
//                               </span>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid mt-10 mb-8">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="card">
//                 <div
//                   className="card-header bg-gradient-primary"
//                   style={{
//                     textAlign: center,
//                     justifyContent: center,
//                     alignContent: center,
//                     color: White,
//                   }}
//                 >
//                   Total Expense of individual category
//                 </div>
//                 <div className="card-body bg-gradient-light">
//                   <Bar data={data} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
