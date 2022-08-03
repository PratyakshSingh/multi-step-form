import React from "react";
import "./FormComponent.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Form4 = () => {
  return (
    <div className="lastform">
      <div>
        <CheckCircleIcon
          color="primary"
          fontSize="large"
          style={{ padding: "0px 150px" }}
        />
        <h1>Congratulations, Eren</h1>
        <h5>You have completed onboarding, you can start using Eren</h5>
      </div>
    </div>
  );
};

export default Form4;
