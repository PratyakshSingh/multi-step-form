import { TextField } from "@mui/material";
import React from "react";
import "./FormComponent.css";

const Form2 = () => {
  return (
    <div>
      <div className="header">
        <h3>Let's set up a home for all your work</h3>
        <h5>You can always create a workspace later</h5>
      </div>
      <div className="body">
        <div className="inputField">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Workspace Name"
            variant="outlined"
          />
        </div>
        <div className="inputField">
          <TextField
            fullWidth
            placeholder=""
            id="outlined-basic"
            label="Workspace URL"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Form2;
