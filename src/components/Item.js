import React, { useState } from "react";
import { colors } from "../utility";

function Item({ customKey, value }) {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: width > 500 ? "500px" : "100%",
        backgroundColor: colors.orange,
        borderBottom: "3px solid",
        borderColor: "orange",
        color: "white",
      }}
    >
      <span style={{ margin: "10px", padding: "10px", fontWeight: 700 }}>
        {customKey}{" "}
      </span>
      <span style={{ margin: "10px", padding: "10px" }}>{value}</span>
    </li>
  );
}

export default Item;
