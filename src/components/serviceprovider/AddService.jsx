import React from "react";
import { useForm } from "react-hook-form";

export const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async () => {
    console.log("called");
  };
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="mb-4">Add Service</h3>

              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    htmlFor="name"
                    {...register("name")}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="service_name"
                    {...register("service_name")}
                    type="text"
                    className="form-control"
                    placeholder="Service Name"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="category"
                    {...register("category")}
                    type="text"
                    className="form-control"
                    placeholder="Category"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="subcategory"
                    {...register("subcategory")}
                    type="text"
                    className="form-control"
                    placeholder="SubCategory"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="type"
                    {...register("type")}
                    type="text"
                    className="form-control"
                    placeholder="Type"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="fees"
                    {...register("fees")}
                    type="text"
                    className="form-control"
                    placeholder="Fees"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="area"
                    {...register("area")}
                    type="text"
                    className="form-control"
                    placeholder="Area"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="city"
                    {...register("city")}
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    htmlFor="state"
                    {...register("state")}
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                </div>

                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
