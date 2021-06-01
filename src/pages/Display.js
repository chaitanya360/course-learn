import React from "react";
import CenteredHeadline from "../components/CenteredHeadline";
import Item from "../components/Item";
import { sizes } from "../utility";

function Display({ values }) {
  return (
    <div style={{ height: "100vh" }}>
      <CenteredHeadline title="Registered Data" />
      <center>
        <ul
          style={{
            fontSize: sizes.medium,
            marginTop: "50px",
          }}
          className="data_list"
        >
          <Item customKey="Username :" value={values.username} />
          <Item customKey="Address :" value={values.add} />
          <Item customKey="Mobile :" value={values.mobile} />
          <Item customKey="Email :" value={values.email} />
        </ul>
      </center>
    </div>
  );
}

export default Display;
