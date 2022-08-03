import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import "./FormComponent.css";

const Form3 = () => {
  const [alignment, setAlignment] = useState("myself");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <div className="header">
        <h2>How are you planning to use Eden?</h2>
        <h6>We'll streamline your setup experience accordingly</h6>
      </div>
      <div className="bodyCard">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton className="buttons" size="large" value="myself">
            <div className="cardText">
              <h3>For Myself</h3>
              <p>Write better.Think more clearly.Stay organized</p>
            </div>
          </ToggleButton>
          <ToggleButton className="buttons" value="team">
            <div className="cardText">
              <h3>For the Team</h3>
              <p>Wikis, docs, tasks & projects, all in one place</p>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Form3;
