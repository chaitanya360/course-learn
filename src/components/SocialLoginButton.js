import React, { forwardRef, useState } from "react";
import { colors, sizes } from "../utility";

const SocialLoginButton = forwardRef(
  ({ signUp = true, With = "Gmail", src = "fb_color.png" }, ref) => {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
    });
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid black",
          borderColor: colors.font_medium,
          borderRadius: "40px",
          padding: "0px 20px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            fontSize: width > 1000 ? sizes.regular : sizes.small,
            fontWeight: 500,
          }}
        >
          <span style={{ color: colors.orange }}>
            {signUp ? "Sign Up" : "Log In"}
          </span>{" "}
          With {With}
        </div>
        <div
          style={{
            height: "100%",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "fill",
          }}
        >
          <img alt="bg" src={`${process.env.PUBLIC_URL}/icons/` + src} />
        </div>
      </div>
    );
  }
);

export default SocialLoginButton;
