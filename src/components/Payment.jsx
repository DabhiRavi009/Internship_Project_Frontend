import React from "react";

export const Payment = () => {
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
                    <p className="mb-4">Your payment details</p>

                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <div class="d-flex align-items-center pe-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value=""
                          aria-label="..."
                          checked
                        />
                      </div>
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                      />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <input
                            type="text"
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
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <div class="d-flex align-items-center pe-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value=""
                          aria-label="..."
                          checked
                        />
                      </div>
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/color/48/000000/visa.png"
                      />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="formControlLgXs"
                            className="form-control form-control-lg"
                            placeholder="**** **** **** 4296"
                          />
                          <label
                            className="form-label"
                            htmlFor="formControlLgXs"
                          >
                            Card Number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        id="formControlLgXM8"
                        className="form-control"
                        placeholder="1234 5678 1234 5678"
                      />
                      <label className="form-label" htmlFor="formControlLgXM8">
                        Card Number
                      </label>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-outline">
                          <input
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
                        <div className="form-outline">
                          <input
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
                      Order now
                    </button>
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
