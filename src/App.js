import { Provider } from "react-alert";
import "./App.css";
import AlertTemplate from "react-alert-template-basic";
import Routes from "./Routes";
import Header from "./components/Header";
import CoursesContext from "./Context/CoursesContext";
import { useEffect, useState } from "react";
import UserContext from "./Context/UserContext";

const options = {
  position: "bottom center",
  timeout: 1500,
  offset: "30px",
  transition: "scale",
};

function App() {
  const [courses, setCourses] = useState(false);
  const [user, setUser] = useState(false);
  const getCourses = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json"
    )
      .then((response) => response.json().then((data) => setCourses(data)))
      .catch((e) => alert("somthing went wrong"));
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CoursesContext.Provider value={{ courses, setCourses }}>
        <Provider template={AlertTemplate} {...options}>
          <Header />
          <Routes />
        </Provider>
      </CoursesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
