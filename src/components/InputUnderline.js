import React, { useRef, useState } from "react";
import { colors, sizes } from "../utility";
import "./components.css";
import classnames from "classnames";

function InputUnderline({
  text = "Enter Here",
  type = "text",
  value,
  setValue,
}) {
  const [placeholderStyle, setPlaceholderStyle] = useState({});
  const inputRef = useRef();

  let handleOnFocus = () => {
    setPlaceholderStyle({
      fontSize: sizes.small,
      fontWeight: 400,
      bottom: "100%",
      transform: "translateY(100%)",
    });

    inputRef.current.style.borderColor = "black";
  };

  let handleOnBlur = (element) => {
    if (element.target.value.length === 0) setPlaceholderStyle({});
    else
      setPlaceholderStyle({
        fontSize: sizes.small,
        bottom: "100%",
        transform: "translateY(100%)",
      });
  };

  return (
    <div style={{ position: "relative", marginTop: "10px", width: "100%" }}>
      <label
        style={{
          position: "absolute",
          bottom: 0,
          padding: "10px",
          fontSize: sizes.regular,
          zIndex: -1,
          color: colors.font_medium,
          ...placeholderStyle,
          transition: "300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",
        }}
        className="placeholder"
      >
        {text}
      </label>
      <input
        type={type}
        style={{
          fontSize: sizes.regular,
          fontWeight: 500,
          width: "100%",
          padding: "30px 0px 10px 10px",
          border: "none",
          borderBottom: "2px solid",
          borderColor: colors.font_medium,
          backgroundColor: "transparent",
        }}
        onFocusCapture={handleOnFocus}
        onBlur={handleOnBlur}
        className={classnames("form-control", "input", "is-invalid")}
        ref={inputRef}
        value={value}
        onChange={(val) => setValue(val.target.value)}
      ></input>
    </div>
  );
}

export default InputUnderline;
