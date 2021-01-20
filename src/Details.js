import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import "./Details.css";
function Details(props) {
  const [name, setName] = useState("Name");
  const [description, setDescription] = useState(
    "Room Description - Single Room - Single Bed, Sleeps 1. Room Only. Room Description- Double Room - Double Bed, Attach Washroom-Room plus living area"
  );
  const [price, setPrice] = useState("Price");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="Details">
      <div className="upper-container">
        <div className="image-container">
          <img alt="" src={props.imageUrl} />
        </div>
      </div>
      <div className="lower-container">
        <h2> {props.name} </h2>
        <h3> {description} </h3>
        <h4> {props.price} </h4>
        {props.type === "hotels" && (
          <>
            <button onClick={handleClick}>Book Single room</button>
            <button onClick={handleClick}>Book Double room</button>
          </>
        )}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Booked Successfully!!!!!!!!!!!"
      />
    </div>
  );
}

export default Details;
