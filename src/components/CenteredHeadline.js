import React from "react";
import { useAlert } from "react-alert";
import { colors, sizes } from "../utility";

function CenteredHeadline({
  title = "Register",
  subtitle,
  titleColor = "#20303c",
}) {
  const alert = useAlert();
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: sizes.ex_large,
          fontWeight: 700,
          color: titleColor,
          padding: "10px",
          textAlign: "center",
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: sizes.medium, fontWeight: 400 }}>
          If you have an account{" "}
          <span
            style={{ color: colors.orange, fontWeight: 500, cursor: "pointer" }}
            onClick={() => alert.show("Not Available Yet")}
          >
            Log in
          </span>
        </div>
      )}
    </div>
  );
}

export default CenteredHeadline;
