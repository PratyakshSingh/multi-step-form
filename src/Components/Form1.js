import React from "react";
import { TextField } from "@mui/material";
import "./FormComponent.css";

const Form1 = () => {
  return (
    <div>
      <div className="header">
        <h2>Welcome! First things first...</h2>
        <h5>You can always change them later</h5>
      </div>
      <div className="body">
        <div className="inputField">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
        </div>
        <div className="inputField">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Display Name"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Form1;
