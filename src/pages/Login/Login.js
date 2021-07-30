import React, { useContext, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import CenteredHeadline from "../../components/CenteredHeadline";
import InputUnderline from "../../components/InputUnderline";
import Logo from "../../components/Logo";
import SocialLoginButton from "../../components/SocialLoginButton";
import VectorImage from "../../components/VectorImage";
import UserContext from "../../Context/UserContext";
import { colors, sizes } from "../../utility";

function Login() {
  const alert = useAlert();
  const [width, setWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const setUser = useContext(UserContext).setUser;
  const history = useHistory();

  const handleSubmit = () => {
    if (username.length !== 0 && password.length !== 0) {
      setUser(username);
      history.push("/dashboard");
    } else {
      alert.show("Field Cannot Be Empty");
    }
  };

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div style={{ padding: "10px 20px" }}>
        <Logo />
      </div>
      <CenteredHeadline title="Login" />
      <VectorImage
        src="images/cat_on_table.png"
        bottom={0}
        right={0}
        width="20%"
        style={{ transform: "translateY(5px)" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: width > 800 ? "30px 15vw" : "30px 30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            borderRight: width < 800 ? "none" : "2px solid black",
            paddingInline: width < 800 ? "15px" : "50px",
          }}
        >
          <InputUnderline
            text="Username"
            value={username}
            setValue={setUsername}
          />
          <InputUnderline
            text="password"
            type="password"
            value={password}
            setValue={setpassword}
          />

          <Button
            bg_color={colors.secondary}
            text="Login"
            style={{
              padding: "8px 40px",
              margin: "50px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          />
          {width < 800 && (
            <div style={{ fontWeight: 600, marginBottom: "50px" }}>OR </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingInline: width < 800 ? "15px" : "50px",
          }}
        >
          <div
            style={{ width: width > 1000 ? "80%" : "100%", margin: "10px" }}
            onClick={() => alert.show("Not Available Yet")}
          >
            <SocialLoginButton signUp src="google_color.png" With="Gmail" />
          </div>
          <div
            style={{ width: width > 1000 ? "80%" : "100%", margin: "10px" }}
            onClick={() => alert.show("Not Available Yet")}
          >
            <SocialLoginButton signUp src="fb_color.png" With="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
