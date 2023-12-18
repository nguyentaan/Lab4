import React from "react";
import "typeface-roboto";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";
import '../style.css';

function Ex14() {
  return (
    <div className="container">
      <h3 style={{ color: "red" }}>Ex 1.4</h3>
      <FormGroup style={{ width: 200, margin: 10 }}>
        <MyTextInput />
        <MySelect />
      </FormGroup>
    </div>
  );
}

export default Ex14;
