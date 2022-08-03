import React, { useState } from "react";
import "./FormComponent.css";
import { Button } from "@mui/material";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";
import Form3 from "../Components/Form3";
import Form4 from "../Components/Form4";
import { Stepper, Step, StepLabel } from "@mui/material";

const FormComponent = () => {
  const [page, setPage] = useState(1);

  function showForm(page) {
    switch (page) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return <Form4 />;
      default:
        return;
    }
  }

  function prevForm() {
    setPage(page - 1);
  }

  function nextForm() {
    setPage(page + 1);
  }
  return (
    <div className="form">
      <div className="heading">
        <h2>Eden</h2>
      </div>
      <div className="stepper">
        <Stepper
          style={{ width: "25%" }}
          activeStep={page - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="form-container">{showForm(page)}</div>
      <div className="buttons">
        <Button
          style={{ marginRight: "10px", padding: "10px 50px" }}
          disabled={page === 1}
          onClick={prevForm}
          variant="contained"
        >
          Prev
        </Button>
        <Button
          style={{ marginLeft: "10px", padding: "10px 50px" }}
          disabled={page === 4}
          onClick={nextForm}
          variant="contained"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FormComponent;
