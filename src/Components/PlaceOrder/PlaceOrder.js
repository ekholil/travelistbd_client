import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth";
const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = UseAuth()
  const {id} = useParams()
  const [spot, setSpot] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/spots/${id}`)
    .then(res => res.json())
    .then(data => setSpot(data))
  }, [])


  const onSubmit = (data) => {
      data.spotname = spot?.name
      data.imgurl = spot?.imgurl
      data.status = 'pending'
        fetch("http://localhost:5000/bookedspot", {
            method: "POST", 
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Well Done", "Your confirmed your booking", "success");
          reset();
        }
      });
  };

  //console.log(watch("name"));

  return (
    <div>
      <h1
        className="text-center text-success mb-4"
        style={{ marginTop: "80px" }}
      >
        Confirm Booking 
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <img className="img-fluid" src={spot?.imgurl} alt="" />
              <h2>{spot?.name}</h2>
              <p>{spot?.desc}</p>
          </div>
          <div className="col-md-6">
            <form
              className="d-flex flex-column"
              style={{ width: "400px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                value={user.displayName}
                placeholder="Your Name"
                className="form-control mt-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                value={user.email}
                placeholder="Your Email"
                className="form-control mt-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control mt-2"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                placeholder="Your Address"
                className="form-control mt-2"
                {...register("address", { required: true })}
              />
              {errors.number && (
                <span className="text-danger">This field is required</span>
              )}
              <input
                type="date"
                className="form-control mt-2"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-danger">This field is required</span>
              )}
              

              <input
                className="form-control mb-5  bg-primary text-white"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
