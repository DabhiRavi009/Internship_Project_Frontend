import React from "react";
// import "./Payment.css";
import { useForm } from "react-hook-form";
// import Payment_Schema from "./UserSchema";
// import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Payment = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const id = useParams().id;

  const submitHandler = (data) => {
    // try{
    // const res = await axios.put(
    //   `http://localhost:1000/bookservices/bookservice/${id}`,
    //   { Status: "Done" }
    // );
    // console.log("id..",id)
    // if (res.status === 200) {
    //   console.log("data Updeted");
    // }
    // else {
    //   alert("Data not updated");
    // }
    console.log(data);
    // }catch(error){
    //   console.log(error)
    // }
  };

  return (
    <div className="service-list-container" style={{ marginLeft: "150px" }}>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ width: "600px" }}>
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between mb-0">
                    <h3 className="text-muted mb-0">Service Payment</h3>
                  </div>
                </div>

                <div
                  className="rounded-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="card-body">
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <form onSubmit={handleSubmit(submitHandler)}>
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                          style={{ padding: "20px" }}
                        />
                        <div className="flex-fill mx-3">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="card_name"
                              {...register("card_name")}
                              id="formControlLgXc"
                              className="form-control form-control-lg"
                              placeholder="**** **** **** 3193"
                            />
                            <label
                              className="form-label"
                              htmlFor="formControlLgXc"
                            >
                              Card Number
                            </label>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-6">
                            <div
                              className="form-outline"
                              style={{ padding: "20px" }}
                            >
                              <input
                                name="Date"
                                {...register("Date")}
                                type="password"
                                id="formControlLgExpk8"
                                className="form-control"
                                placeholder="MM/YYYY"
                              />
                              <label
                                className="form-label"
                                htmlFor="formControlLgExpk8"
                              >
                                Expire
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="form-outline"
                              style={{ padding: "20px" }}
                            >
                              <input
                                name="Cvv"
                                {...register("Cvv")}
                                type="password"
                                id="formControlLgcvv8"
                                className="form-control"
                                placeholder="Cvv"
                              />
                              <label
                                className="form-label"
                                htmlFor="formControlLgcvv8"
                              >
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>

                        <button className="btn btn-info btn-block">
                          Make Payment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
