import { Provider } from "react-alert";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import AlertTemplate from "react-alert-template-basic";
import { useState } from "react";
import Display from "./pages/Display";

const options = {
  position: "bottom center",
  timeout: 1500,
  offset: "30px",
  transition: "scale",
};

function App() {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState();
  return (
    <Provider template={AlertTemplate} {...options}>
      {submit ? (
        <Display values={values} />
      ) : (
        <SignUp setValues={setValues} setSubmit={setSubmit} />
      )}
    </Provider>
  );
}

export default App;
