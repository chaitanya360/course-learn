import React from "react";
import Logo from "./Logo";
import { colors } from "../utility";

function header(props) {
  return (
    <div className="dashboard-header">
      <Logo color="rgba(255,255,255,0.9)" />
    </div>
  );
}

export default header;
